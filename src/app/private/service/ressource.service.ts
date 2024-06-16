import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ressources } from '../model/Ressources';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {


  baseUrl = 'http://localhost:8082/api/auth/evenements'

  constructor(private httpclient : HttpClient) { }
  getAllRessources(){
    return this.httpclient.get<Ressources[]>(this.baseUrl + '/ressources')
  } 
  deleteRessources(id: number){
    return this.httpclient.delete(this.baseUrl + '/ressources/' +id)
  }
  addRessources(ressources: Ressources) {
    return this.httpclient.post(this.baseUrl + '/ressources',ressources)
  }
  editRessources(id: number, ressources:Ressources) {
    return this.httpclient.put(this.baseUrl + '/ressources/' + id , ressources);
  }
  getRessourcesById(id : number) {
    return this.httpclient.get<Ressources>(this.baseUrl+ '/ressources/' + id) ;
  }
  getRessourcesByCollaborateurId(id: number): Observable<Ressources[]> {
    return this.httpclient.get<Ressources[]>(this.baseUrl + '/ressources/collaborateur/' +id);
  }

  getRessourcesBySousCategorieId(sousCategorieId: number) :  Observable<Ressources[]> {
    return this.httpclient.get<Ressources[]>(`${this.baseUrl}/ressources/sous-categorie/${sousCategorieId}`);
  }

  updateQuantiteDisponible(id: number, nouvelleQuantite: number): Observable<any> {
    const url = `${this.baseUrl}/ressources/${id}/updateQuantiteDisponible?nouvelleQuantite=${nouvelleQuantite}`;
    return this.httpclient.put<any>(url, {});
  }

}
