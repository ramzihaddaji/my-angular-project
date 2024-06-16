import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthentificationService } from 'src/app/auth/service/authentification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rest-password',
  templateUrl: './rest-password.component.html',
  styleUrls: ['./rest-password.component.css']
})
export class RestPasswordComponent {

  email: string = '';
  loginRequest: any = {}; // Initialize loginRequest as an empty object

  constructor(private route: ActivatedRoute , private authService : AuthentificationService) {
    // Récupérer l'e-mail de l'utilisateur à partir de l'URL
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });
  }

  forgotPassword(email: string) {
    this.authService.forgotPassword(email)
      .subscribe({
        next: () => {
          Swal.fire({
            title: 'Success!',
            text: 'Password reset link sent to your email.',
            icon: 'success'
          });
        }
      });
  }
  
}
