import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inscription } from '../model/Inscription';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
  baseUrl = 'http://localhost:8082/api/auth/evenements'

  constructor(private httpclient : HttpClient) { }
  getAllInscription(){
    return this.httpclient.get<Inscription[]>(this.baseUrl + '/inscription')
  } 
  deleteInscription(id: number){
    return this.httpclient.delete(this.baseUrl + '/inscription/' +id)
  }
  addInscription(inscription: Inscription) {
    return this.httpclient.post(this.baseUrl + '/inscription',inscription)
  }
  editInscription(id: number, inscription:Inscription) {
    return this.httpclient.put(this.baseUrl + '/inscription/' + id , inscription);
  }
  getInscriptionById(id : number) {
    return this.httpclient.get<Inscription>(this.baseUrl+ '/inscription/' + id) ;
  }

  getInscriptionByEvenementId(id: number): Observable<Inscription[]> {
    return this.httpclient.get<Inscription[]>(this.baseUrl + '/inscription/inscriptions/' + id);
  }
  getInscriptionByUtilisateurId(id: number): Observable<Inscription[]> {
    return this.httpclient.get<Inscription[]>(this.baseUrl + '/inscription/inscription/' + id);
  }
  updateInscriStatus(id: number, newStatus: string): Observable<any> {
    return this.httpclient.put<any>(`${this.baseUrl}/inscription/${id}/status`, { status: newStatus });
  }


  
}
