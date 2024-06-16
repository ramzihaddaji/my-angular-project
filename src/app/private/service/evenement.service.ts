import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Evenement } from '../model/evenement';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  baseUrl = 'http://localhost:8082/api/auth/evenements'

  

  constructor(private httpclient : HttpClient) { }

  getUserIdFromLocalStorage(): number | undefined {
    const userDataString = localStorage.getItem('userdata');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      return userData.id;
    }
    return undefined;
  }
  

  private filteredEvenementsSubject = new BehaviorSubject
  ([] as Evenement[]);
  filteredEvenements$ = this.filteredEvenementsSubject.asObservable();

  updateFilteredEvenements(evenements: Evenement[]) {
    this.filteredEvenementsSubject.next(evenements);
  }
  getEvenementsActif(): Observable<Evenement[]> {
    return this.httpclient.get<Evenement[]>(`${this.baseUrl}/evenement/actifs`);
  }

  getEvenementByUtlisateurId(id: number): Observable<Evenement[]> {
    return this.httpclient.get<Evenement[]>(this.baseUrl + '/evenement/evenement/' +id);
  }

  getEvenementByUtlisateurCOAId(id: number): Observable<Evenement[]> {
    return this.httpclient.get<Evenement[]>(this.baseUrl + '/evenement/organisateur/' +id);
  }

  getAnnonceEvenements(): Observable<Evenement[]> {
    return this.httpclient.get<Evenement[]>(`${this.baseUrl}/evenement/annonce`);
  }

  getOrganisationEvenements(): Observable<Evenement[]> {
    return this.httpclient.get<Evenement[]>(`${this.baseUrl}/evenement/organisation`);
  }


  getAllEvenement(){
    return this.httpclient.get<Evenement[]>(this.baseUrl + '/evenement')
  } 
  deleteEvenement(id: number){
    return this.httpclient.delete(this.baseUrl + '/evenement/' +id)
  }
  addEvenementOrganisation(evenement: Evenement) {
    const userId = this.getUserIdFromLocalStorage();
    evenement.utilisateurId = userId; 
    return this.httpclient.post(this.baseUrl + '/evenement/organisation',evenement)
  }
  addEvenementAnnonce(evenement: Evenement) {
    const userId = this.getUserIdFromLocalStorage(); // Récupérer l'ID de l'utilisateur connecté
      evenement.utilisateurId = userId; // Remplir le champ utilisateurId de l'événement avec l'ID de l'utilisateur
      return this.httpclient.post(this.baseUrl + '/evenement/annonce', evenement);
  }
  
  editEvenement(id: number, evenement:Evenement) {
    return this.httpclient.put(this.baseUrl + '/evenement/' + id , evenement);
  }
  getEvenementById(id : number) {
    return this.httpclient.get<Evenement>(this.baseUrl+ '/evenement/' + id) ;
  }
  updateEventStatus(eventId: number, newStatus: string): Observable<any> {
    return this.httpclient.put<any>(`${this.baseUrl}/evenement/${eventId}/status`, { status: newStatus });
  }


  updateEventTarif(eventId: number, newTarif: string): Observable<any> {
    const tarifNumber = parseInt(newTarif); // Convert newTarif to a number
    return this.httpclient.put<any>(`${this.baseUrl}/evenement/${eventId}/tarif`, { tarif: tarifNumber });
  }
  



  addOrganisateurToEvenement(eventId: number, organisateurId: number): Observable<any> {
    return this.httpclient.put<any>(`${this.baseUrl}/evenement/${eventId}/organisateur/${organisateurId}`, {});
  }

  
  
  
}

