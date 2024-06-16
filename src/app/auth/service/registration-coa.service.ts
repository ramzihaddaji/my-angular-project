import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequestCOA } from '../model/RegisterRequestCOA';

@Injectable({
  providedIn: 'root'
})
export class RegistrationCOAService {

  private baseUrl = 'http://localhost:8082/api/evenements/auth/COA';

  constructor(private http: HttpClient) { }

  registerUser(registerRequest: RegisterRequestCOA) {
    return this.http.post<any>(`${this.baseUrl}/register`, registerRequest);
  }

  registerOrganisateur(registerRequest: RegisterRequestCOA) {
    return this.http.post<any>(`${this.baseUrl}/registerOrganisateur`, registerRequest);
  }

  registerCollaborateur(registerRequest: RegisterRequestCOA) {
    return this.http.post<any>(`${this.baseUrl}/registerCollaborateur`, registerRequest);
  }
}
