import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginRequestCOA } from '../model/LoginRequestCOA';
import { LoginResponseCOA } from '../model/LoginResponseCOA';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationCOAService {
  private baseUrl: string = 'http://localhost:8082/api/evenements/auth/COA';
  private userId: string | null = null;

  constructor(private http: HttpClient, private router: Router ) {}

  setUserId(userId: string): void {
    this.userId = userId;
  }

  getUserId(): string | null {
    return this.userId;
  }

  login(loginRequest: LoginRequestCOA): Observable<LoginResponseCOA> {
    return this.http.post<LoginResponseCOA>(`${this.baseUrl}/authenticat`, loginRequest);
  }

  isAdminLoggedIn(): boolean {
    // Récupérer le token JWT depuis le stockage local
    const token = localStorage.getItem('token');
  
    // Vérifier si le token est présent
    if (token) {
      // Extraire les informations du token (décode le token)
      const decodedToken = this.decodeToken(token);
  
      // Vérifier si l'utilisateur a l'un des rôles "admin", "collaborateur" ou "organisateur"
      if (decodedToken.role === 'admin' || decodedToken.role === 'collaborateur' || decodedToken.role === 'organisateur') {
        return true; // L'utilisateur a un des rôles d'administrateur
      }
    }
  
    return false; // L'utilisateur n'a pas de rôle d'administrateur
  }
  logout(): void {
    const tokenKey = 'token'; // Définition de la clé du token
    localStorage.removeItem(tokenKey); // Efface le token du localStorage
  }
  
  // Méthode pour décoder le token JWT
  private decodeToken(token: string): any {
    try {
      // Décoder le token JWT
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map((c: string) => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
  
      // Retourner les informations décodées
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Erreur lors du décodage du token JWT : ', error);
      return {};
    }
  }
  
}
