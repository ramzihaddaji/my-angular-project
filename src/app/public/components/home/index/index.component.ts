import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/private/model/evenement';
import { EvenementService } from 'src/app/private/service/evenement.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  events: any[] = [];
  displayLimit: number = 8;
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
    return this.allEvents.length <= this.displayLimit;
  }

  evenementList: Evenement[] = [];
  evenementListP: Evenement[] = [];
  selectedEvenement: Evenement | null = null;

  displayEvenement() {
    this.evenementService.getAllEvenement().subscribe((res) => {
      this.evenementList = res.filter(evenement => evenement.frais == 'gratuit' && evenement.status == 'actif' && evenement.typeEvenement == 'Public');
      this.updateAllEvents();
      console.log("gratuit:", this.evenementList);
    });
  }

  displayEvenementP() {
    this.evenementService.getAllEvenement().subscribe((res) => {
      this.evenementListP = res.filter(evenement => evenement.frais !== 'gratuit' && evenement.status == 'actif' && evenement.typeEvenement == 'Public');
      this.updateAllEvents();
      console.log("payant:", this.evenementListP);
    });
  }

  allEvents: Evenement[] = [];

  updateAllEvents() {
    this.allEvents = [...this.evenementList, ...this.evenementListP];
  }

  selectEvenement(evenement: Evenement) {
    this.selectedEvenement = evenement;
  }
}
