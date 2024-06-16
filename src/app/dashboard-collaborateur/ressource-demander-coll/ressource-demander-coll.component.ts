import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ressource_event } from 'src/app/private/model/Ressource_event';
import { SousCategories } from 'src/app/private/model/SousCategories';
import { RessourceEventService } from 'src/app/private/service/ressource-event.service';
import { RessourceService } from 'src/app/private/service/ressource.service';
import { SousCategoriesService } from 'src/app/private/service/sous-categories.service';
import { UserCOAService } from 'src/app/private/service/user-coa.service';

@Component({
  selector: 'app-ressource-demander-coll',
  templateUrl: './ressource-demander-coll.component.html',
  styleUrls: ['./ressource-demander-coll.component.css']
})
export class RessourceDemanderCollComponent {
  Souscategories?: SousCategories;
  evenementID: string | null = null;
  ressourceEventList: Ressource_event[] = [];
  organisateurId? : number ;
  nomRessource? : string ;
  nomEvenement? : string ;
  selectedResource: Ressource_event | null = null;

  constructor(
    private ressourceEventService: RessourceEventService,
    private authCOAService : UserCOAService,
    private ressourceService: RessourceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.evenementID = this.route.snapshot.paramMap.get('id');
    if (this.evenementID != null && this.evenementID != 'new') {
      this.displayRessourceEvent(Number(this.evenementID));
    }
  }

  displayRessourceEvent(id: number) {
    this.ressourceEventService.getRessource_eventByCollaborateurID(id).subscribe((res: Ressource_event[]) => {
      this.ressourceEventList = res;
      console.log(res);

      res.forEach(event => {
        this.organisateurId = event.evenement?.utilisateurCOAId
        this.nomEvenement = event.evenement?.nom
        this.nomRessource = event.nom_ressource
      });
    });
  }

  accepterRessource(resource: Ressource_event) {
    this.selectedResource = resource;
    if (resource.id !== undefined) {
      this.ressourceEventService.accepterRessourceEvent(resource.id).subscribe(() => {
        const message = `Votre ressouce ${resource.nom_ressource} a été acceptée pour l'événement ${resource.evenement?.nom} par ${resource.collaborateur?.nom}`;
        const nouvelleQuantite = Number(resource.ressource?.quantite) - Number(resource.quantite_ressource);
        this.ressourceService.updateQuantiteDisponible(Number(resource.ressource?.id) , nouvelleQuantite ).subscribe(() => {
          // Mettre à jour la liste des ressources après l'acceptation
          this.displayRessourceEvent(Number(this.evenementID));
        });
        this.authCOAService.updateNotificationWithMessage(Number(this.organisateurId), message).subscribe(() => {
          // Mettre à jour la liste des ressources après l'acceptation
          this.displayRessourceEvent(Number(this.evenementID));
        });
      });
    } else {
      console.error("L'identifiant de la ressource est indéfini.");
    }
  }
  
  refuserRessource(resource: Ressource_event) {
    this.selectedResource = resource;
    if (resource.id !== undefined) {
      this.ressourceEventService.refuserRessourceEvent(resource.id).subscribe(() => {
        const message = `Votre ressource ${resource.nom_ressource} a été refusée pour l'événement ${resource.evenement?.nom} par ${resource.collaborateur?.nom}`;
        this.authCOAService.updateNotificationWithMessage(Number(this.organisateurId), message).subscribe(() => {
          // Supprimer la ressource après avoir envoyé la notification
          this.ressourceEventService.deleteRessource_event(Number(resource.id)).subscribe(() => {
            // Mettre à jour la liste des ressources après la suppression
            this.displayRessourceEvent(Number(this.evenementID));
          });
        });
      });
    } else {
      console.error("L'identifiant de la ressource est indéfini.");
    }
  }
  
}
