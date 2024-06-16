import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ressource_event } from '../model/Ressource_event';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourceEventService {

  baseUrl = 'http://localhost:8082/api/auth/evenements'

  constructor(private httpclient : HttpClient) { }
  getAllRessource_event(){
    return this.httpclient.get<Ressource_event[]>(this.baseUrl + '/ressource-events')
  } 
  deleteRessource_event(id: number){
    return this.httpclient.delete(this.baseUrl + '/ressource-events/' +id)
  }
  addRessource_event(ressourceEvents: Ressource_event) {
    return this.httpclient.post(this.baseUrl + '/ressource-events',ressourceEvents)
  }
  editRessource_event(id: number, ressourceEvents:Ressource_event) {
    return this.httpclient.put(this.baseUrl + '/ressource-events/' + id , ressourceEvents);
  }

  accepterRessourceEvent(id: number): Observable<any> {
    return this.httpclient.put(this.baseUrl + '/ressource-events/' + id + '/accepter', {});
  }
  refuserRessourceEvent(id: number): Observable<any> {
    return this.httpclient.put(`${this.baseUrl}/ressource-events/${id}/refuser`, {});
  }
  getRessource_eventById(id : number) {
    return this.httpclient.get<Ressource_event>(this.baseUrl+ '/ressource-events/' + id) ;
  }

  // getRessource_eventByEvenementId(id : number) {
  //   return this.httpclient.get<Ressource_event>(this.baseUrl+ '/ressource-events/evenement/' + id) ;
  // }

  getRessource_eventByEvenementId(id: number): Observable<Ressource_event[]> {
    return this.httpclient.get<Ressource_event[]>(this.baseUrl + '/ressource-events/evenement/' +id);
  }



  getRessource_eventByCollaborateurID(id: number): Observable<Ressource_event[]> {
    return this.httpclient.get<Ressource_event[]>(this.baseUrl + '/ressource-events/utilisateur/' +id);
  }

  
}
