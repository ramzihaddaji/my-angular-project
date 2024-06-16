import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRequest } from 'src/app/auth/model/LoginRequest';
import { LoginRequestCOA } from 'src/app/auth/model/LoginRequestCOA';
import { LoginResponse } from 'src/app/auth/model/LoginResponse';
import { LoginResponseCOA } from 'src/app/auth/model/LoginResponseCOA';
import { AuthentificationCOAService } from 'src/app/auth/service/authentification-coa.service';
import { AuthentificationService } from 'src/app/auth/service/authentification.service';
import { User } from 'src/app/private/model/user';
import { UserCOAService } from 'src/app/private/service/user-coa.service';

@Component({
  selector: 'app-sidebar-collaborateur',
  templateUrl: './sidebar-collaborateur.component.html',
  styleUrls: ['./sidebar-collaborateur.component.css'],
})
export class SidebarCollaborateurComponent implements OnInit {
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
