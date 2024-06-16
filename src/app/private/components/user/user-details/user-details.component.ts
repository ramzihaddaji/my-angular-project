import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/private/service/user-service.service';
import { User } from 'src/app/private/model/user';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userForm: FormGroup;
  user: User = {};
  userId: string | null = null;
  roles: string[] = ["utilisateur", "participant", "client"];

  constructor(
    private userService: UserService,
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
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }
  onBack()
  {
    this.location.back();
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId != null && this.userId != 'new') {
      this.displayUser(Number(this.userId));
    }
  }

  displayUser(id: number) {
    this.userService.getUserById(id).subscribe((res) => {
      this.user = res;
      this.userForm.patchValue(this.user);
    });
  }

  addUser() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe((res) => {
        console.log(res);
      });
    }
  }

  saveUser() {
    if (this.userForm.valid) {
      if (this.user?.id) {
        this.updateUser(this.user.id);
      } else {
        this.addUser();
      }
    }
  }

  updateUser(id: number) {
    if (this.userId) {
      this.userService.editUser(id, this.userForm.value).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/user']);
      });
    }
  }

  deleteUser() {
    if (this.user.id) {
      this.userService.deleteUser(this.user.id).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/user']);
      });
    }
  }
}
