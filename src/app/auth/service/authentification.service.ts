import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LoginRequest } from '../model/LoginRequest';
import { LoginResponse } from '../model/LoginResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private baseUrl : string  ='http://localhost:8082/api/evenements/auth';


  constructor(private http:HttpClient , private router : Router) { }

  private userId: string | null = null;

  setUserId(userId: string): void {
    this.userId = userId;
  }




  getUserId(): string | null {
    return this.userId;
  }
  
  login(loginRequest: LoginRequest){
    return this.http.post<LoginResponse>(`${this.baseUrl}/authenticat`, loginRequest);
  }

  forgotPassword(email: string): Observable<any> {
    const url = `${this.baseUrl}/reset-password?email=${email}`;
    return this.http.put(url, null);
  }

  setNewPassword(email: string, newPassword: string): Observable<any> {
    const url = `${this.baseUrl}/set-password?email=${email}`;
    return this.http.put(url, null, { headers: { newPassword: newPassword } });
  }

  

}
