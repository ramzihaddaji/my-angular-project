import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCOA } from 'src/app/private/model/userCOA';
import { UserCOAService } from 'src/app/private/service/user-coa.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-get-detais-coa',
  templateUrl: './get-detais-coa.component.html',
  styleUrls: ['./get-detais-coa.component.css']
})
export class GetDetaisCOAComponent {

  userForm: FormGroup;
  user: UserCOA = {};
  userId: string | null = null;
  roles: string[] = ["utilisateur", "participant", "client", "admin", "collaborateur", "organisateur"];

  constructor(
    private userService: UserCOAService,
    private location:Location,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder 
  ) {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      ncin: ['', Validators.required],
      date_naiss: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId != null && this.userId != 'new') {
      this.displayUser(Number(this.userId));
    }
  }
  onBack()
  {
    this.location.back();
  }

  displayUser(id: number) {
    this.userService.getUserByIdCOA(id).subscribe((res) => {
      this.user = res;
    });
  }

  addUser() {
    this.userService.addUserCOA(this.user).subscribe((res) => {
      console.log(res);
    });
  }

  saveUser() {
    if (this.user?.id) {
      this.updateUser(this.user?.id);
    } else {
      this.addUser();
    }
  }

  updateUser(id: number) {
    if (this.userId) {
      this.userService.editUserCOA(id, this.user).subscribe((res) => {
        console.log(res);
      });
    }
  }

  deleteUser() {
    if (this.user.id) {
      this.userService.deleteUserCOA(this.user.id)
      .subscribe((res)=> {
        console.log(res);
        this.router.navigate(['/user']); // Rediriger vers la liste des événements après la suppression
      });
    }
  }

}
