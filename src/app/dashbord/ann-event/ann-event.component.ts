import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Evenement } from 'src/app/private/model/evenement';
import { EvenementService } from 'src/app/private/service/evenement.service';
import { UserService } from 'src/app/private/service/user-service.service';


@Component({
  selector: 'app-ann-event',
  templateUrl: './ann-event.component.html',
  styleUrls: ['./ann-event.component.css']
})
export class AnnEventComponent {

  evenementList: Evenement[] = [];
  selectedEvenement: Evenement | null = null;
  expandedDescriptions: { [key: number]: boolean } = {};


  constructor(private evenementService: EvenementService, private router: Router,
    private authCOAService : UserService
  ) {}

  ngOnInit(): void {
    this.displayEvenement();
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

  displayEvenement() {
    this.evenementService.getAnnonceEvenements().subscribe((res) => {
      this.evenementList = res;
      console.log(res);
    });
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
            this.displayEvenement();
            this.selectedEvenement = null;
          },
          (error) => {
            console.error('Erreur lors de la suppression de l\'événement :', error);
          }
        );
    }
  }

  updateStatus(eventId: number | undefined, newStatus: string | undefined): void {
    if (eventId !== undefined && newStatus !== undefined) {
      this.evenementService.updateEventStatus(eventId, newStatus).subscribe(() => {
        this.displayEvenement();
        this.sendNotification(eventId);
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

  updateTarif(eventId: number, newTarif: number) {
    const tarifString = newTarif.toString(); // Convert newTarif to a string
    this.evenementService.updateEventTarif(eventId, tarifString).subscribe(
      response => {
        console.log('Tarif updated successfully');
      },
      error => {
        console.error('Error updating tarif', error);
      }
    );
  }
  
}
