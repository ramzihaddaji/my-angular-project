import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Field } from '../model/field';
import { Form } from '@angular/forms';
import { Formulaire } from '../model/Formulaire';


@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiUrl = 'http://localhost:8082/api/auth/evenements/submit-form';

  constructor(private http: HttpClient) {}


  addFormWithID(id: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}`, {});
  }

  getFormsByEvenementId(evenementId: number): Observable<Formulaire[]> {
    return this.http.get<Formulaire[]>(`${this.apiUrl}/evenement/${evenementId}`);
  }
  



  getAllFields(): Observable<Field[]> {
    return this.http.get<Field[]>(this.apiUrl);
  }

  getFieldById(id: number): Observable<Field> {
    return this.http.get<Field>(`${this.apiUrl}/${id}`);
  }

  createField(field: Field): Observable<Field> {
    return this.http.post<Field>(this.apiUrl, field);
  }

  updateField(id: number, field: Field): Observable<Field> {
    return this.http.put<Field>(`${this.apiUrl}/${id}`, field);
  }

  deleteField(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }




}
