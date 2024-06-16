import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user-service.service';

import { Router } from '@angular/router';
import { User } from '../../model/user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  UserList: User[] = [] ;

  

  roles: string[] = [
    'participant',
    'client',
  ];


  
  constructor(private UserService : UserService,

  ) {}



  ngOnInit(): void {
    this.displayUser() ;
  }
  displayUser(){
    this.UserService.getAllUser().subscribe((res) => {
      this.UserList = res ;
      console.log(res);
    });
  }


  selectedUser!: User ;
  selectUser(User: any){
    this.selectedUser = User ;
  }

  
  deleteUser() {
    if (this.selectedUser.id) {
      this.UserService.deleteUser(this.selectedUser.id)
      .subscribe((res)=> {
        console.log(res) ;
        this.displayUser() ;
      });
    }
  }

  updateUserRole(id: number | undefined, newRole: string | undefined): void {
    console.log('userId:', id);
    console.log('newRole:', newRole);
    console.log(this.selectedUser?.nom)
    

    // Ajouter des logs pour l'ID de l'utilisateur et le nouveau rôle

  
    if (id !== undefined && newRole !== undefined && newRole.trim() !== '') {
      this.UserService.updateUserRole(id, newRole).subscribe(
        () => {
          console.log('Rôle de l\'utilisateur mis à jour avec succès');
          // Mettre à jour la liste des utilisateurs après la mise à jour du rôle
          this.displayUser();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du rôle de l\'utilisateur :', error);
        }
      );
    } else {
      console.error('Impossible de mettre à jour le rôle de l\'utilisateur : ID ou rôle non défini');
    }
    
  }



}












  