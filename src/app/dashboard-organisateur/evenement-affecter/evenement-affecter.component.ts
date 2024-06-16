import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/auth/service/authentification.service';
import { Categorie } from 'src/app/private/model/categorie';
import { Evenement } from 'src/app/private/model/evenement';
import { CategorieService } from 'src/app/private/service/categorie.service';
import { EvenementService } from 'src/app/private/service/evenement.service';
import { RessourceEventService } from 'src/app/private/service/ressource-event.service';
import { UserService } from 'src/app/private/service/user-service.service';

@Component({
  selector: 'app-evenement-affecter',
  templateUrl: './evenement-affecter.component.html',
  styleUrls: ['./evenement-affecter.component.css']
})
export class EvenementAffecterComponent implements OnInit {
  evenementList: Evenement[] = [];
  selectedEvenement: Evenement | null = null;
  categories?: Categorie;
  userId: string | null = null;
  prixT? : string ;
  expandedDescriptions: { [key: number]: boolean } = {};

  constructor(
    private authCOAService : UserService , 
    private evenementService: EvenementService,
    private categorieService: CategorieService,
    private ressourceEventService: RessourceEventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId != null && this.userId !== 'new') {
      this.displayEvenement(Number(this.userId));
    }
  }

  displayEvenement(id: number): void {
    this.evenementService.getEvenementByUtlisateurCOAId(id).subscribe((res: Evenement[]) => {
      this.evenementList = res;
      this.evenementList.forEach(event => {
        this.loadCategorieForEvenement(event);
        this.calculateTotalRessourcePrice(event);
      });
    });
  }

  loadCategorieForEvenement(event: Evenement): void {
    if (event.categorieId) {
      this.categorieService.getCategorieById(event.categorieId).subscribe(categorie => {
        event.categorie = categorie;
      });
    }
  }

  calculateTotalRessourcePrice(event: Evenement): void {
    this.ressourceEventService.getRessource_eventByEvenementId(Number(event.id)).subscribe(ressources => {
      // Calculer le prix total des ressources
      const prixTotal = ressources.reduce((total, ressource) => {
        const prixUnitaire = ressource.ressource?.prixRes || 0;
        const quantite = ressource.quantite_ressource || 0;
        return total + (prixUnitaire * quantite);
      }, 0);
  
      // Appliquer la majoration de 20%
      const prixTotalAvecMajoration = prixTotal * 1.20;
      if(event.id)
      // Mettre à jour l'événement avec le nouveau prix total
      this.evenementService.updateEventTarif(event.id, prixTotalAvecMajoration.toString()).subscribe(response => {
        console.log('Tarif mis à jour avec succès', response);
        event.prixTotal = prixTotalAvecMajoration; // Mettre à jour l'objet event localement
      }, error => {
        console.error('Erreur lors de la mise à jour du tarif', error);
      });
    });
  }
  updateStatus(eventId: number | undefined, newStatus: string | undefined): void {
    if (eventId !== undefined && newStatus !== undefined) {
      this.evenementService.updateEventStatus(eventId, newStatus).subscribe(() => {
        this.sendNotification(eventId);
        this.displayEvenement(Number(this.userId));
        // Refresh the list of events after updating the status
        // this.displayEvenement();
      }, (error) => {
        console.error(error);
      });
    } else {
      console.error('Event ID or new status is undefined');
    }
  }



  sendNotification(eventId: number): void {
    // Fetch event details to include in the notification message
    this.evenementService.getEvenementById(eventId).subscribe(event => {
      const message = `Votre evenement a ete ${event.status} ${event.nom}.`;
      console.log(event)
      this.authCOAService.updateNotificationWithMessage(Number(event.responseUser?.id), message).subscribe(() => {
        console.log('Notification sent successfully');
      }, error => {
        console.error('Error sending notification:', error);
      });
    }, error => {
      console.error('Error fetching event details:', error);
    });
  }

  truncateText(text: string, limit: number, eventId: number): string {
    if (text.length > limit) {
      return this.expandedDescriptions[eventId] ? text : text.substring(0, limit) + '... <a href="#" (click)="toggleDescription($event, ' + eventId + ')">Lire la suite</a>';
    }
    return text;
  }

  toggleDescription(event: Event, eventId: number): void {
    event.preventDefault();
    this.expandedDescriptions[eventId] = !this.expandedDescriptions[eventId];
  }
  
}
