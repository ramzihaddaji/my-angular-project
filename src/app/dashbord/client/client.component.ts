import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/private/model/user';
import { UserService } from 'src/app/private/service/user-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  client?: any[];
  ClientList: User[] = [] ;
  roles: string[] = [
    'participant',
    'client',
    'admin',
    'collaborateur',
    'organisateur'
  ];

  constructor(private UserService : UserService) {}


  ngOnInit(): void {
    this.displayUser() ;
    console.log(this.ClientList);
  }

  displayUser(){
    this.UserService.getClients().subscribe((res) => {
      this.ClientList = res ;
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

  


}
