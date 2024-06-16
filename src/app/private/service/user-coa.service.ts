import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserCOA } from '../model/userCOA';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCOAService {
  baseUrl = 'http://localhost:8082/api/auth/evenements'
  baseUrlRegister = 'http://localhost:8082/api/evenements/auth/COA'
  
  

  constructor(private httpclient : HttpClient) { }

  addUserCOA(user: UserCOA) {
    return this.httpclient.post(this.baseUrlRegister + '/register',user)
  }

  getAllUserCOA(){
    return this.httpclient.get<UserCOA[]>(this.baseUrlRegister )
  } 

  deleteUserCOA(id: number){
    return this.httpclient.delete<UserCOA[]>(this.baseUrl + '/utlisateurCOA/' + id)
  }
 
  editUserCOA(id: number, user:UserCOA) {
    return this.httpclient.put(this.baseUrl + '/utlisateurCOA/'  + id , user);
  }
   

  getUserByIdCOA(id : number) {
    return this.httpclient.get<UserCOA>(this.baseUrl+ '/utlisateurCOA/' + id) ;
  }

  getUtilisateurByIdCOA(id : number) {
    return this.httpclient.get<UserCOA>(this.baseUrlRegister+'/'+ id) ;
  }

  updateNotificationWithMessage(id: number, message: string) {
    const notification = message;
    return this.httpclient.post(this.baseUrlRegister + `/${id}/updateNotification`,  notification );
  }

  getOrganisateurs(): Observable<any> {
    return this.httpclient.get<any>(this.baseUrl + '/utilisateurs/organisateurs');
  }

  getAdmins(): Observable<any> {
    return this.httpclient.get<any>(this.baseUrl + '/utilisateurs/admin');
  }

  getCollaborateurs(): Observable<any> {
    return this.httpclient.get<any>(this.baseUrl + '/utilisateurs/collaborateur');
  }
}
