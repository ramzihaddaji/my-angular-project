import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscription } from 'src/app/private/model/Inscription';
import { Categorie } from 'src/app/private/model/categorie';
import { Evenement } from 'src/app/private/model/evenement';
import { CategorieService } from 'src/app/private/service/categorie.service';
import { EvenementService } from 'src/app/private/service/evenement.service';
import { InscriptionService } from 'src/app/private/service/inscription.service';

@Component({
  selector: 'app-liste-evenement-by-iduser',
  templateUrl: './liste-evenement-by-iduser.component.html',
  styleUrls: ['./liste-evenement-by-iduser.component.css']
})
export class ListeEvenementByIDUSerComponent {
  evenementList: Evenement[] = [];
  selectedEvenement: Evenement | null = null;
  categories?: Categorie;
  userId: string | null = null;
  ResponseList: Inscription[] = [];
  expandedDescriptions: { [key: number]: boolean } = {};

  constructor(
    private evenementService: EvenementService,
    private categorieService: CategorieService,
    private inscriptionService: InscriptionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
    this.displayEvenement(Number(this.userId));
  }

  displayInscription(id: number) {
    this.inscriptionService.getInscriptionByUtilisateurId(id).subscribe((res) => {
      this.ResponseList = res;
      console.log(res);
    });
  }

  displayEvenement(id: number) {
    this.evenementService.getEvenementByUtlisateurId(id).subscribe((res: Evenement[]) => {
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
