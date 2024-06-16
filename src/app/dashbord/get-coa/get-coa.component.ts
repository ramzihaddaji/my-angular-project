import { Component } from '@angular/core';
import { UserCOA } from 'src/app/private/model/userCOA';
import { UserCOAService } from 'src/app/private/service/user-coa.service';

@Component({
  selector: 'app-get-coa',
  templateUrl: './get-coa.component.html',
  styleUrls: ['./get-coa.component.css']
})
export class GetCOAComponent {

  UserList: UserCOA[] = [] ;

  

  roles: string[] = [
    'admin',
    'collaborateur',
    'organisateur'
  ];


  
  constructor(private UserService : UserCOAService) {}

  ngOnInit(): void {
    this.displayUser() ;
  }
  displayUser(){
    this.UserService.getAllUserCOA().subscribe((res) => {
      this.UserList = res ;
      console.log(res);
    });
  }


  selectedUser!: UserCOA ;
  selectUser(User: any){
    this.selectedUser = User ;
  }

  
  deleteUser() {
    if (this.selectedUser.id) {
      this.UserService.deleteUserCOA(this.selectedUser.id)
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
  }

}
