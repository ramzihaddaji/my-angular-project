import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from 'src/app/auth/model/LoginRequest';
import { LoginResponse } from 'src/app/auth/model/LoginResponse';
import { AuthentificationService } from 'src/app/auth/service/authentification.service';
import { User } from 'src/app/private/model/user';
import { UserService } from 'src/app/private/service/user-service.service';

@Component({
  selector: 'app-sidebar-client',
  templateUrl: './sidebar-client.component.html',
  styleUrls: ['./sidebar-client.component.css']
})
export class SidebarClientComponent {
  loginResponse: LoginResponse = {};
  loginRequest: LoginRequest = {};
  userId: string | null = null;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
  }

    
  logout(): void {
    localStorage.clear; // Déconnexion de l'administrateur
  }

}
