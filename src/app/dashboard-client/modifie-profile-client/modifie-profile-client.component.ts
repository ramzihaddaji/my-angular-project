import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from 'src/app/auth/model/LoginRequest';
import { LoginResponse } from 'src/app/auth/model/LoginResponse';
import { AuthentificationService } from 'src/app/auth/service/authentification.service';
import { User } from 'src/app/private/model/user';
import { UserService } from 'src/app/private/service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modifie-profile-client',
  templateUrl: './modifie-profile-client.component.html',
  styleUrls: ['./modifie-profile-client.component.css'],
})
export class ModifieProfileClientComponent {
  userForm: FormGroup;
  user: User = {};
  userId: string | null = null;
  roles: string[] = [
    'utilisateur',
    'participant',
    'client',
    'admin',
    'collaborateur',
    'organisateur',
  ];

  constructor(
    private userService: UserService,
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
      role: ['', Validators.required],
    });
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
    });
  }

  addUser() {
    this.userService.addUser(this.user).subscribe((res) => {
      console.log(res);
    });
  }

  saveUser() {
    if (this.user?.id) {
      this.updateUser(this.user?.id);
      Swal.fire({
        title: 'Mise à jour réussie!',
        icon: 'success',
      });
    } else {
      this.addUser();
      Swal.fire({
        title: 'Ajout réussi!',
        icon: 'success',
      });
    }
  }

  updateUser(id: number) {
    if (this.userId) {
      this.userService.editUser(id, this.user).subscribe((res) => {
        console.log(res);
      });
    }
  }

  deleteUser() {
    if (this.user.id) {
      this.userService.deleteUser(this.user.id).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/user']); // Rediriger vers la liste des événements après la suppression
      });
    }
  }
}
