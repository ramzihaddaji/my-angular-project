import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionResponse } from '../model/QuestionResponse';

@Injectable({
  providedIn: 'root'
})
export class QuestionResponseServiceService {
  baseUrl = 'http://localhost:8082/api/auth/evenements'

  constructor(private httpclient : HttpClient) { }

  getResponseByInscriptionId(id: number): Observable<QuestionResponse[]> {
    return this.httpclient.get<QuestionResponse[]>(this.baseUrl + '/questionResponse/ResponseQuestion/' + id);
  }
}
