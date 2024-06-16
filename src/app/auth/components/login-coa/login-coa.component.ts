import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginResponseCOA } from '../../model/LoginResponseCOA';
import { LoginRequestCOA } from '../../model/LoginRequestCOA';
import { AuthentificationCOAService } from '../../service/authentification-coa.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-coa',
  templateUrl: './login-coa.component.html',
  styleUrls: ['./login-coa.component.css'],
})
export class LoginCOAComponent {
  loginResponse: LoginResponseCOA = {};
  loginRequest: LoginRequestCOA = {};

  constructor(
    private authService: AuthentificationCOAService,
    private router: Router
  ) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  loginUser() {
    this.authService.login(this.loginRequest).subscribe({
      next: (response) => {
        this.loginResponse = response;
        console.log(this.loginResponse);
        const accessToken = this.loginResponse.token;

        localStorage.setItem('token', accessToken as string);
        localStorage.setItem('admindata', JSON.stringify(this.loginResponse));

        // Redirection en fonction du rôle de l'utilisateur
        switch (response.role) {
          case 'admin':
            this.router.navigate(['/dashboardadmin', response.id]);
            break;
          case 'organisateur':
            this.router.navigate(['/dashboardorganisateur', response.id]);
            break;
          case 'collaborateur':
            this.router.navigate(['/dashboardcollaborateur', response.id]);
            break;
          default:
            this.router.navigate(['/home']);
            break;
        }

        Swal.fire({
          title: 'Connexion réussie!',
          text: 'Vous avez cliqué sur le bouton!',
          icon: 'success',
        });
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          title: 'Échec de la connexion',
          text: 'Vérifiez votre email ou mot de passe',
          icon: 'error',
        });
      },
    });
  }
}
