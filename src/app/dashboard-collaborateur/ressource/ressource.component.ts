import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ressources } from 'src/app/private/model/Ressources';
import { SousCategories } from 'src/app/private/model/SousCategories';
import { RessourceService } from 'src/app/private/service/ressource.service';
import { SousCategoriesService } from 'src/app/private/service/sous-categories.service';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {
  souscategories: SousCategories[] = [];
  userID: string | null = null;
  ressourceEventList: Ressources[] = [];
  ressources: Ressources = {} as Ressources; // Initialiser avec un objet vide
  selectedRessource!: Ressources;
  expandedDescriptions: { [key: number]: boolean } = {};

  constructor(
    private ressourceService: RessourceService,
    private sousCategorieService: SousCategoriesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    this.loadSousCategories();
    this.displayRessourceEvent(Number(this.userID));
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

  loadSousCategories() {
    this.sousCategorieService.getAllSousCategories().subscribe((res: SousCategories[]) => {
      this.souscategories = res;
    });
  }

  displayRessourceEvent(id: number) {
    this.ressourceService.getRessourcesByCollaborateurId(id).subscribe((res: Ressources[]) => {
      this.ressourceEventList = res;
    });
  }

  editResource(resource: Ressources) {
    this.ressources = { ...resource }; // Copier les propriétés de la ressource sélectionnée
  }

  saveRessources() {
    if (this.ressources.id) {
      this.ressourceService.editRessources(this.ressources.id, this.ressources).subscribe(() => {
        this.displayRessourceEvent(Number(this.userID));
      });
    } else {
      this.addRessources();
    }
  }

  addRessources() {
    this.ressources.collaborateurId = Number(this.userID);
    this.ressourceService.addRessources(this.ressources).subscribe(() => {
      this.displayRessourceEvent(Number(this.userID));
    });
  }

  selectRessources(resource: Ressources) {
    this.selectedRessource = resource;
  }

  deleteRessources() {
    if (this.selectedRessource.id) {
      this.ressourceService.deleteRessources(this.selectedRessource.id).subscribe(() => {
        this.displayRessourceEvent(Number(this.userID));
      });
    }
  }
}
