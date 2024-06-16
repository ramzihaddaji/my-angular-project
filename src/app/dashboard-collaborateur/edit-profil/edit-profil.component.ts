import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequestCOA } from 'src/app/auth/model/LoginRequestCOA';
import { LoginResponseCOA } from 'src/app/auth/model/LoginResponseCOA';
import { AuthentificationCOAService } from 'src/app/auth/service/authentification-coa.service';
import { User } from 'src/app/private/model/user';
import { UserCOA } from 'src/app/private/model/userCOA';
import { UserCOAService } from 'src/app/private/service/user-coa.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent {
  userCOA: UserCOA = {};
  userId: string | null = null;

  constructor(
    private userCOAService: UserCOAService,
    private route: ActivatedRoute,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId != null && this.userId != 'new') {
      this.displayUser(Number(this.userId));
    }
  }
  
  displayUser(id: number) {
    this.userCOAService.getUserByIdCOA(id).subscribe((res) => {
      this.userCOA = res;
    });
  }

  addUser() {
    this.userCOAService.addUserCOA(this.userCOA).subscribe((res) => {
      console.log(res);
    });
  }

  saveUser() {
    if (this.userCOA?.id) {
      this.updateUser(this.userCOA?.id);
    } else {
      this.addUser();
    }
  }

  updateUser(id: number) {
    if (this.userId) {
      this.userCOAService.editUserCOA(id, this.userCOA).subscribe((res) => {
        console.log(res);
      });
    }
  }

  deleteUser() {
    if (this.userCOA.id) {
      this.userCOAService.deleteUserCOA(this.userCOA.id)
      .subscribe((res)=> {
        console.log(res);
        this.router.navigate(['/user']); // Rediriger vers la liste des événements après la suppression
      });
    }
  }
}
