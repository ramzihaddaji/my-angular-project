import { Component } from '@angular/core';
import { Evenement } from 'src/app/private/model/evenement';
import { EvenementService } from 'src/app/private/service/evenement.service';

@Component({
  selector: 'app-index-p',
  templateUrl: './index-p.component.html',
  styleUrls: ['./index-p.component.css']
})
export class IndexPComponent {

  events: any[] = [];
  displayLimit: number = 8;
  filteredEvenements: Evenement[] = [];

  expandedDescriptions: { [key: number]: boolean } = {};



  constructor(private evenementService: EvenementService) { }

  ngOnInit(): void {
    this.displayEvenement();
    this.displayEvenementP();
   

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




  loadMoreEvents() {
    this.displayLimit += 8; // Augmente la limite d'affichage de 8
  }

  isLoadMoreDisabled(): boolean {
    return this.evenementList.length <= this.displayLimit;
  }


  evenementList: Evenement[] = [];
  evenementListP: Evenement[] = [];
  selectedEvenement: Evenement | null = null;





  displayEvenement() {
    this.evenementService.getAllEvenement().subscribe((res) => {
      this.evenementList =   res.filter(evenement=> evenement.frais=='gratuit' && evenement.status == 'actif' && evenement.typeEvenement == 'Public');
      

      console.log("gratuit:", this.evenementList);
    });
  }
  displayEvenementP() {
    this.evenementService.getAllEvenement().subscribe((res) => {
      this.evenementListP = res.filter(evenement => evenement.frais !== 'gratuit' && evenement.status == 'actif' && evenement.typeEvenement == 'Public');
      console.log("payant:", this.evenementListP);
    });
  }
  

  selectEvenement(evenement: Evenement) {
    this.selectedEvenement = evenement;
  }


}
