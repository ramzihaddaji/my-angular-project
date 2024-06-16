import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RessourceDemander } from '../model/RessourceDemander';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourceDemanderServiceService {

  baseUrl = 'http://localhost:8082/api/auth/evenements'

  constructor(private httpclient : HttpClient) { }
  getAllRessource_event(){
    return this.httpclient.get<RessourceDemander[]>(this.baseUrl + '/ressource-demander')
  } 
  deleteRessource_event(id: number){
    return this.httpclient.delete(this.baseUrl + '/ressource-demander/' +id)
  }
  addRessource_event(ressourceEvents: RessourceDemander) {
    return this.httpclient.post(this.baseUrl + '/ressource-demander',ressourceEvents)
  }
  editRessource_event(id: number, ressourceEvents:RessourceDemander) {
    return this.httpclient.put(this.baseUrl + '/ressource-demander/' + id , ressourceEvents);
  }
  getRessource_eventById(id : number) {
    return this.httpclient.get<RessourceDemander>(this.baseUrl+ '/ressource-demander/' + id) ;
  }


  getRessource_eventByEvenementId(id: number): Observable<RessourceDemander[]> {
    return this.httpclient.get<RessourceDemander[]>(this.baseUrl + '/ressource-demander/evenement/' +id);
  }

}
