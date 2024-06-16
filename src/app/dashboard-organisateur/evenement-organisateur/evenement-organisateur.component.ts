import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/private/model/categorie';
import { Evenement } from 'src/app/private/model/evenement';
import { UserCOA } from 'src/app/private/model/userCOA';
import { CategorieService } from 'src/app/private/service/categorie.service';
import { EvenementService } from 'src/app/private/service/evenement.service';
import { UserCOAService } from 'src/app/private/service/user-coa.service';

@Component({
  selector: 'app-evenement-organisateur',
  templateUrl: './evenement-organisateur.component.html',
  styleUrls: ['./evenement-organisateur.component.css']
})
export class EvenementOrganisateurComponent {

  evenementList: Evenement[] = [];
  selectedEvenement: Evenement | null = null;
  categories?: Categorie;
  userCOA?: UserCOA;
  expandedDescriptions: { [key: number]: boolean } = {};

  

  constructor(private evenementService: EvenementService
    ,private categorieService : CategorieService ,
    private userCOAservice : UserCOAService
    ,private router: Router) {}

  ngOnInit(): void {
    this.displayEvenement();
  }



  redirectToAffecterOrganisateur(eventId?: number) {
    // Redirection vers la composante d'affectation d'organisateur avec l'ID de l'événement
    this.router.navigate(['/affecterOrganisateur', eventId]);
  }

  displayEvenement() {
    this.evenementService.getOrganisationEvenements().subscribe((res: Evenement[]) => {
      this.evenementList = res;
      console.log(res);
      this.evenementList.forEach(event => {
        this.loadCategorieForEvenement(event);
      });
    });
  }
  

  
  loadCategorieForEvenement(event: Evenement) {
    if (event.categorieId) {
      this.categorieService.getCategorieById(event.categorieId).subscribe(categorie => {
        event.categorie = categorie;
      });
    }
  }

  loadNomOrganisateur(userCOA: UserCOA) {
    if (userCOA.id) {
      this.userCOAservice.getUserByIdCOA(userCOA.id).subscribe(user => {
        this.userCOA = user; // Assurez-vous d'assigner le résultat à la propriété userCOA du composant
      });
    }
  }
  
  selectEvenement(evenement: Evenement) {
    this.selectedEvenement = evenement;
  }

  deleteEvenement() {
    if (this.selectedEvenement && this.selectedEvenement.id) {
      this.evenementService.deleteEvenement(this.selectedEvenement.id)
        .subscribe(
          (res) => {
            console.log(res);
            this.displayEvenement(); // Rafraîchir la liste des événements après la suppression réussie
            this.selectedEvenement = null; // Réinitialiser l'événement sélectionné après la suppression
          },
          (error) => {
            console.error('Erreur lors de la suppression de l\'événement :', error);
            // Gérer l'erreur - afficher un message à l'utilisateur, par exemple
          }
        );
    }
  }
  afficherParticipants(evenement: Evenement) {
    // Rediriger vers la page des participants de l'événement sélectionné
    this.router.navigate(['/evenement', evenement.id, 'participants']);
  }

  updateStatus(eventId: number | undefined, newStatus: string | undefined): void {
    if (eventId !== undefined && newStatus !== undefined) {
      this.evenementService.updateEventStatus(eventId, newStatus).subscribe(() => {
        // Refresh the list of events after updating the status
        this.displayEvenement();
      }, (error) => {
        console.error(error);
      });
    } else {
      console.error('Event ID or new status is undefined');
    }
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
