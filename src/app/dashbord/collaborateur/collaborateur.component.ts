import { Component, OnInit } from '@angular/core';
import { UserCOA } from 'src/app/private/model/userCOA';
import { UserCOAService } from 'src/app/private/service/user-coa.service';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.css']
})
export class CollaborateurComponent implements OnInit {

  client?: any[];
  ClientList: UserCOA[] = [];
  roles: string[] = [
    'participant',
    'client',
    'admin',
    'collaborateur',
    'organisateur'
  ];

  constructor(private UserService: UserCOAService) {}

  ngOnInit(): void {
    this.displayUser();
  }

  displayUser() {
    this.UserService.getCollaborateurs().subscribe((res) => {
      this.ClientList = res;
    });
  }

  selectedUser!: UserCOA;
  selectUser(User: UserCOA) {
    this.selectedUser = { ...User }; // Clone the user object to avoid two-way binding issues
  }

  deleteUser() {
    if (this.selectedUser.id) {
      this.UserService.deleteUserCOA(this.selectedUser.id).subscribe((res) => {
        this.displayUser();
      });
    }
  }

  updateUser() {
    if (this.selectedUser.id) {
      this.UserService.editUserCOA(this.selectedUser.id, this.selectedUser).subscribe((res) => {
        this.displayUser();
        
      });
    }
  }
}
