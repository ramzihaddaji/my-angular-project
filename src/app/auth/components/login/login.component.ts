import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../../model/LoginRequest';
import { AuthentificationService } from '../../service/authentification.service';
import { LoginResponse } from '../../model/LoginResponse';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginResponse: LoginResponse = {};
  loginRequest: LoginRequest = {};

  constructor(
    private authService: AuthentificationService,
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

        if (response.confirmed == 'true') {
          localStorage.setItem('token', accessToken as string);
          localStorage.setItem('userdata', JSON.stringify(this.loginResponse));

          Swal.fire({
            title: 'Connexion réussie!',
            text: 'Vous avez cliqué sur le bouton!',
            icon: 'success',
          });

          this.router.navigate(['/home']);
        } else {
          Swal.fire({
            title: 'Vérifiez votre email',
            text: 'Vérifiez votre boîte email',
            icon: 'error',
          });
        }
      },
      error: (err) => {
        Swal.fire({
          title: 'Erreur',
          text: 'Vérifiez votre email ou mot de passe',
          icon: 'error',
        });
      }
    });
  }
}
