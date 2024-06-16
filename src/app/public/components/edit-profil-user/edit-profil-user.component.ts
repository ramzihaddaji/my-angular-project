import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/private/model/user';
import { UserService } from 'src/app/private/service/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-profil-user',
  templateUrl: './edit-profil-user.component.html',
  styleUrls: ['./edit-profil-user.component.css']
})
export class EditProfilUserComponent implements OnInit {

  user: User = {};
  userId: string | null = null;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // Try to get the user ID from the route first

      const userData = localStorage.getItem('userdata');
      if (userData) {
        this.user = JSON.parse(userData);
        this.userId = this.user.id ? this.user.id.toString() : null;
        console.log("User data from localStorage:", this.user);
      }

    if (this.userId && this.userId !== 'new') {
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
      Swal.fire({
        title: 'Ajout réussi!',
        icon: 'success',
      })
    });
  }

  saveUser() {
    if (this.user?.id) {
      this.updateUser(this.user?.id);
      Swal.fire({
        title: 'Mise à jour réussie!',
        icon: 'success',
      }).then(() => {
        this.router.navigate(['/user']); // Redirect after updating user
      });
    } else {
      this.addUser();
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
        Swal.fire({
          title: 'Suppression réussie!',
          icon: 'success',
        }).then(() => {
          this.router.navigate(['/user']); // Redirect after deleting user
        });
      });
    }
  }
}
