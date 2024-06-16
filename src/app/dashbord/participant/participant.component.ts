import { Component } from '@angular/core';
import { User } from 'src/app/private/model/user';
import { UserService } from 'src/app/private/service/user-service.service';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent {

  
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
    this.UserService.getParticipants().subscribe((res) => {
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
