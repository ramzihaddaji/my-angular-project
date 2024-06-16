import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/private/model/user';
import { EvenementService } from 'src/app/private/service/evenement.service';
import { UserCOAService } from 'src/app/private/service/user-coa.service';
import { UserService } from 'src/app/private/service/user-service.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-affecter-organisateur',
  templateUrl: './affecter-organisateur.component.html',
  styleUrls: ['./affecter-organisateur.component.css'],
})
export class AffecterOrganisateurComponent {
  client?: any[];
  ClientList: User[] = [];
  eventId: number = 0;
  idE!: string;
  id?: number | null = null; // Assign null by default
  organisateurs: User[] = [];
  selectedOrganizerIndex: number | null = null;

  constructor(
    private location:Location,
    private evenementService: EvenementService,
    private UserService: UserService,
    private route: ActivatedRoute,
    private authCOAService : UserCOAService,
  ) {}

  onBack()
  {
    this.location.back();
  }

  ngOnInit(): void {
    this.displayUser();
    console.log('wnk' + this.ClientList);
    console.log(this.route.snapshot.params['idE']);
    this.idE = this.route.snapshot.params['idE'];
  }

  displayUser() {
    this.UserService.getOrganisateurs().subscribe((res) => {
      this.ClientList = res;
      console.log('wnk2' + res);
    });
  }

  selectedUserId: number | undefined = undefined;

  selectUser(User: any) {
    this.selectedUserId = User.id;
    console.log("ID de l'utilisateur sélectionné : " + this.selectedUserId);
  }

  handleCheckboxChange(index: number): void {
    this.selectedOrganizerIndex = index;
    this.selectedUserId = this.ClientList[index].id;
    console.log("ID de l'utilisateur sélectionné : " + this.selectedUserId);
  }

  validateOrganizer(): void {
    if (this.selectedUserId !== undefined) {
      const eventId = parseInt(this.idE);
      this.evenementService
        .addOrganisateurToEvenement(eventId, this.selectedUserId)
        .subscribe(
          (response) => {
            Swal.fire({
              icon: 'error',
              title: 'Erreur!',
              text: 'Aucun organisateur sélectionné',
              confirmButtonText: 'OK',
            }).then(() => {
              // Mettez en œuvre la logique supplémentaire si nécessaire
            });
          },
          (error) => {
            this.sendNotification(eventId, this.selectedUserId!);
            Swal.fire({
              icon: 'success',
              title: 'Succès!',
              text: 'Organisateur validé avec succès',
              confirmButtonText: 'OK',
            });
            console.error(
              "Erreur lors de la validation de l'organisateur :",
              error
            );
          }
        );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erreur!',
        text: 'Aucun organisateur sélectionné',
        confirmButtonText: 'OK',
      });
      console.error('Aucun organisateur sélectionné.');
    }
  }
  sendNotification(eventId: number, userId: number): void {
    // Fetch event details to include in the notification message
    this.evenementService.getEvenementById(eventId).subscribe(event => {
      const message = `Vous avez été affecté à l'événement ${event.nom}.`;
      this.authCOAService.updateNotificationWithMessage(userId, message).subscribe(() => {
        console.log('Notification sent successfully');
      }, error => {
        console.error('Error sending notification:', error);
      });
    }, error => {
      console.error('Error fetching event details:', error);
    });
  }
}
