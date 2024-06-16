import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../model/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = 'http://localhost:8082/api/evenements/auth';

  constructor(private http: HttpClient) { }

  registerUser(registerRequest: RegisterRequest) {
    return this.http.post<any>(`${this.baseUrl}/register`, registerRequest);
  }


}
