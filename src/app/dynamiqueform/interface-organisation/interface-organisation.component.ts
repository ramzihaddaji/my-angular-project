import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormService } from 'src/app/private/service/form.service';
import { UrlTree, UrlSegment } from '@angular/router';
import { SousCategoriesService } from 'src/app/private/service/sous-categories.service';
import { SousCategories } from 'src/app/private/model/SousCategories';
import { Ressources } from 'src/app/private/model/Ressources';
import { RessourceService } from 'src/app/private/service/ressource.service';
import { Ressource_event } from 'src/app/private/model/Ressource_event';
import { RessourceEventService } from 'src/app/private/service/ressource-event.service';
import { RessourceDemanderServiceService } from 'src/app/private/service/ressource-demander-service.service';
import { RessourceDemander } from 'src/app/private/model/RessourceDemander';
import Swal from 'sweetalert2';
import { Evenement } from 'src/app/private/model/evenement';
import { EvenementService } from 'src/app/private/service/evenement.service';

@Component({
  selector: 'app-interface-organisation',
  templateUrl: './interface-organisation.component.html',
  styleUrls: ['./interface-organisation.component.css']
})
export class InterfaceOrganisationComponent implements OnInit {

  sousCategories: SousCategories[] = [];
  ressource: Ressources | undefined;
  ressources: Ressources [] = [];
  ressources_event: RessourceDemander | undefined;
  selectedSousCategorieId: number | undefined;
  evenementId: number = 0; // Modifier en fonction de votre besoin
  nomRessource: string = ''; // Variable pour stocker le nom de la ressource
  quantiteRessource: number = 0; // Variable pour stocker la quantité de ressource
  evenement? : Evenement ;

  constructor(
    private router: Router, 
    private formService: FormService,
    private evenementService: EvenementService,
    private sousCategoriesService: SousCategoriesService,
    private ressourceService: RessourceService,
    private ressourceEventService : RessourceDemanderServiceService
  ) { }

    ngOnInit(): void {
      this.loadSousCategories();
      this.loadEvenementById();
    }

    
  
    loadSousCategories(): void {
      this.sousCategoriesService.getAllSousCategories().subscribe(sousCategories => {
        this.sousCategories = sousCategories;
      });
    }
    

    loadRessourcesBySousCategorieId(): void {
      if (this.selectedSousCategorieId) {
        this.ressourceService.getRessourcesBySousCategorieId(this.selectedSousCategorieId)
          .subscribe(ressources => {
            this.ressources = ressources;
          });
      }
    }

    loadEvenementById(): void {
      const urlTree: UrlTree = this.router.parseUrl(this.router.url);
      const urlSegment: UrlSegment[] = urlTree.root.children['primary'].segments;
  
      let eventId: number | null = null;
  
      if (urlSegment && urlSegment.length > 0) {
        const idSegment: UrlSegment = urlSegment[urlSegment.length - 1];
        eventId = +idSegment.path;
      }
  
      if (eventId === null || isNaN(eventId)) {
        console.error("L'ID de l'événement dans l'URL est invalide.");
        return;
      }
  
      this.evenementService.getEvenementById(eventId)
        .subscribe(
          evenement => {
            this.evenement = evenement;
            console.log("Evenement chargé avec succès", this.evenement);
          },
          error => {
            console.error("Erreur lors du chargement de l'événement :", error);
          }
        );
    }

    

  createForm() {
    // Extraire l'ID de l'URL
    const urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const urlSegment: UrlSegment[] = urlTree.root.children['primary'].segments;
  
    let eventId: number | null = null;
  
    if (urlSegment && urlSegment.length > 0) {
      const idSegment: UrlSegment = urlSegment[urlSegment.length - 1];
      eventId = +idSegment.path;
    }
  
    if (eventId === null || isNaN(eventId)) {
      console.error("L'ID de l'événement dans l'URL est invalide.");
      return;
    }
  
    this.formService.addFormWithID(eventId).subscribe(
      (response: any) => {
        if (response && response.formId) { // Utilisez la clé correcte
          // Rediriger vers la page du formulaire avec l'ID récupéré
          this.router.navigate(['/createForm', response.formId]);
        } else {
          console.error("L'ID du formulaire n'a pas été renvoyé dans la réponse.");
        }
      },
      (error) => {
        console.error("Une erreur s'est produite lors de la création du formulaire :", error);
      }
    );


  }

  annuler(): void {
    // Aucun traitement nécessaire, la modal se ferme automatiquement
  }


  ajouterRessources() {
    const urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const urlSegment: UrlSegment[] = urlTree.root.children['primary'].segments;
  
    let eventId: number | undefined = undefined;
  
    if (urlSegment && urlSegment.length > 0) {
      const idSegment: UrlSegment = urlSegment[urlSegment.length - 1];
      eventId = +idSegment.path;
    }
  
    if (eventId === undefined || isNaN(eventId)) {
      console.error("L'ID de l'événement dans l'URL est invalide.");
      return;
    }

    // Boucle sur les ressources pour ajouter une par une
    this.ressources.forEach(ressource => {
      if (ressource.selected) {
        // Création de l'objet RessourceDemander pour chaque ressource sélectionnée
        const ressourceDemander: RessourceDemander = {
          nom_ressource: ressource.ressource,
          quantite_ressource: ressource.quantiteDemandee || 1,
          ressourceId: ressource.id || 0,
          evenementId: eventId,
        };
        
        // Appel du service pour ajouter la ressource
        this.ressourceEventService.addRessource_event(ressourceDemander).subscribe(
          (response: any) => {
            console.log("Ressource ajoutée avec succès.", response);
            Swal.fire({
              title: 'Ressource ajoutée avec succès!',
              
              icon: 'success',
            });
          },
          (error) => {
            console.error("Une erreur s'est produite lors de l'insertion de la ressource :", error);
          }
        );
      }
    });
    
    
}


  
  
}
