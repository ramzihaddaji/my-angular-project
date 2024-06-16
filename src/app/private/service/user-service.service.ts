import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { RegisterRequest } from 'src/app/auth/model/RegisterRequest';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8082/api/auth/evenements'
  baseUrlRegister = 'http://localhost:8082/api/evenements/auth'
  

  constructor(private httpclient : HttpClient) { }

  getAllUser(){
    return this.httpclient.get<User[]>(this.baseUrl + '/utilisateurs')
  } 
  deleteUser(id: number){
    return this.httpclient.delete<User[]>(this.baseUrl + '/utilisateurs/' + id)
  }
  addUser(user: User) {
    return this.httpclient.post(this.baseUrlRegister + '/register',user)
  }
  editUser(id: number, user:User) {
    return this.httpclient.put(this.baseUrl + '/utilisateurs/' + id , user);
  }
  getUserById(id : number) {
    return this.httpclient.get<User>(this.baseUrl+ '/utilisateurs/' + id) ;
  }

  updateUserRole(id: number, role: string): Observable<any> {
    return this.httpclient.put<any>(this.baseUrl+ '/utilisateurs/' + id + '/roles' , { role : role});

  }

  getOrganisateurs(): Observable<any> {
    return this.httpclient.get<any>(this.baseUrl + '/utilisateurs/organisateurs');
  }

  getAdmins(): Observable<any> {
    return this.httpclient.get<any>(this.baseUrl + '/utilisateurs/admin');
  }

  getClients(): Observable<any> {
    return this.httpclient.get<any>(this.baseUrl + '/utilisateurs/client');
  }

  getCollaborateurs(): Observable<any> {
    return this.httpclient.get<any>(this.baseUrl + '/utilisateurs/collaborateur');
  }

  getParticipants(): Observable<any> {
    return this.httpclient.get<any>(this.baseUrl + '/utilisateurs/participant');
  }

  updateNotificationWithMessage(id: number, message: string) {
    const notification = message;
    return this.httpclient.post(this.baseUrlRegister + `/${id}/updateNotification`,  notification );
  }



}
