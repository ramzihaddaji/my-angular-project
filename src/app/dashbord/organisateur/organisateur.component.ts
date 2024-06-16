import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/private/model/evenement';
import { UserCOA } from 'src/app/private/model/userCOA';
import { EvenementService } from 'src/app/private/service/evenement.service';
import { UserCOAService } from 'src/app/private/service/user-coa.service';
import { UserService } from 'src/app/private/service/user-service.service';

@Component({
  selector: 'app-organisateur',
  templateUrl: './organisateur.component.html',
  styleUrls: ['./organisateur.component.css']
})
export class OrganisateurComponent implements OnInit {
  
  ClientList: UserCOA[] = [];
  roles: string[] = [
    'participant',
    'client',
    'admin',
    'collaborateur',
    'organisateur'
  ];
  OrganisateurListe: Evenement[] = [];
  selectedUser!: UserCOA;
  selectedUserEvents: Evenement[] = [];

  constructor(
    private userService: UserService,
    private userServiceCOA: UserCOAService,
    private evenementService: EvenementService
  ) {}

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser() {
    this.userService.getOrganisateurs().subscribe((res) => {
      this.ClientList = res;
    });
  }

  selectUser(user: UserCOA) {
    this.selectedUser = user;
    if (user.id) {
    this.loadOrganisateurEvenement(user.id);}
  }

  loadOrganisateurEvenement(id: number) {
    this.evenementService.getEvenementByUtlisateurCOAId(id).subscribe((res) => {
      this.selectedUserEvents = res;
    });
  }

  deleteUser() {
    if (this.selectedUser.id) {
      this.userService.deleteUser(this.selectedUser.id).subscribe((res) => {
        this.displayUser();
      });
    }
  }

  updateUser() {
    if (this.selectedUser.id) {
      this.userServiceCOA.editUserCOA(this.selectedUser.id, this.selectedUser).subscribe((res) => {
        this.displayUser();
        
      });
    }
  }

  openProjectsModal(user: UserCOA) {
    this.selectUser(user);

  }
  
  
}
