import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RessourceDemander } from 'src/app/private/model/RessourceDemander';
import { Ressource_event } from 'src/app/private/model/Ressource_event';
import { Ressources } from 'src/app/private/model/Ressources';
import { SousCategories } from 'src/app/private/model/SousCategories';
import { RessourceDemanderServiceService } from 'src/app/private/service/ressource-demander-service.service';
import { RessourceEventService } from 'src/app/private/service/ressource-event.service';
import { RessourceService } from 'src/app/private/service/ressource.service';
import { SousCategoriesService } from 'src/app/private/service/sous-categories.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ressource-evenet-org',
  templateUrl: './ressource-evenet-org.component.html',
  styleUrls: ['./ressource-evenet-org.component.css'],
})
export class RessourceEvenetOrgComponent implements OnInit {
  ressourceEventList: RessourceDemander[] = [];
  ressourceEventCategorieList: Ressources[] = [];
  Souscategories?: SousCategories;
  evenementID: string | null = null;
  ressourcesWithSousCategorieId: Ressources[] = [];
  selectedRessources: number[] = [];
  selectedRessourcesDemander?: RessourceDemander;
  test? : boolean ;
  quantiteDemander! : number ;

  constructor(
    private location:Location,
    private ressourceDemanderService: RessourceDemanderServiceService,
    private ressourceEventService: RessourceEventService,
    private sousCategorieService: SousCategoriesService,
    private ressourceService: RessourceService, 
    private route: ActivatedRoute
  ) {}

  onBack() {
    this.location.back();
  }

  ngOnInit(): void {
    this.evenementID = this.route.snapshot.paramMap.get('id');
    if (this.evenementID != null && this.evenementID != 'new') {
      this.displayRessourceEvent(Number(this.evenementID));
    }
  }

  displayRessourceEvent(id: number) {
    this.ressourceDemanderService.getRessource_eventByEvenementId(id).subscribe((res: Ressource_event[]) => {
      this.ressourceEventList = res;
      console.log(res);
    });
  }

  getRessourcesBySousCategorieId(sousCategorieId: number, resourceName?: string): void {
    this.ressourceService.getRessourcesBySousCategorieId(sousCategorieId)
      .subscribe((res: Ressources[]) => {
        this.ressourcesWithSousCategorieId = res.filter(resource => 
          resource.ressource === resourceName &&
          (Number(resource.quantite) >= Number(this.selectedRessourcesDemander?.quantite_ressource) || 0)
        );
      });
  }

  handleButtonClick(resource: Ressource_event): void {
    if (resource.ressource && resource.ressource.sousCategorie && resource.ressource.sousCategorie.id !== undefined) {
      this.getRessourcesBySousCategorieId(resource.ressource.sousCategorie.id, resource.nom_ressource);
      this.selectedRessourcesDemander = resource;
    } else {
      console.log("L'ID de la sous-catégorie est undefined.");
    }
  }
  saveSelectedResources(): void {
    if (this.selectedRessourcesDemander && this.evenementID) {
      const selectedResources = this.ressourcesWithSousCategorieId.filter(resource => resource.selected);
      if (selectedResources.length > 0) {
        selectedResources.forEach(resource => {
          if (resource.collaborateur) {
            const request: Ressource_event = {
              nom_ressource: resource.ressource,
              quantite_ressource: this.selectedRessourcesDemander?.quantite_ressource,
              ressourceId: resource.id,
              evenementId: Number(this.evenementID),
              collaborateurId: resource.collaborateur.id 
            };
  
            this.ressourceEventService.addRessource_event(request).subscribe(() => {
              console.log('Ressource enregistrée avec succès pour l\'événement avec l\'ID ' + this.evenementID);
              Swal.fire({
                icon: 'success',
                text: 'Ressource enregistrée avec succès',
                confirmButtonText: 'OK',
              }).then(() => {
                resource.selected = true;
                resource.quantite! -= this.selectedRessourcesDemander!.quantite_ressource!;
                
                // Call the method to update the quantity in the backend
                this.ressourceService.updateQuantiteDisponible(resource.id!, resource.quantite!).subscribe(() => {
                  console.log('Quantité mise à jour avec succès dans la base de données');
                }, error => {
                  console.error('Erreur lors de la mise à jour de la quantité dans la base de données: ', error);
                });
              });
            }, error => {
              console.error('Erreur lors de l\'enregistrement de la ressource pour l\'événement : ', error);
            });
          } else {
            console.log("L'objet collaborateur est undefined pour la ressource : ", resource);
          }
        });
  
        selectedResources.forEach(resource => {
          resource.selected = false;
        });
      } else {
        console.log('Aucune ressource sélectionnée.');
      }
    } else {
      console.log('ID de l\'événement manquant.');
    }
  }
  
}
