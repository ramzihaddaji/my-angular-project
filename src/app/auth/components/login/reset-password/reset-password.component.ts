import { Component } from '@angular/core';
import { AuthentificationService } from 'src/app/auth/service/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {

  email: string = '';
  newPassword: string = '';

  constructor(private authService: AuthentificationService) {}

  setNewPassword() {
    this.authService.setNewPassword(this.email, this.newPassword).subscribe({
      next: (response) => {
        Swal.fire({
          title: 'Success!',
          text: response,
          icon: 'success'
        });
      }
    });
  }

}
