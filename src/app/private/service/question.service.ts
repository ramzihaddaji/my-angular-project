import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8082/api/auth/evenements/questions'; // Assurez-vous de remplacer l'URL par celle de votre API

  constructor(private http: HttpClient) { }


  getQuestionsByFormId(formId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.apiUrl}/form/${formId}`);
  }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.apiUrl);
  }

  getQuestionById(id: number): Observable<Question> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Question>(url);
  }

  addQuestion(question: Question): Observable<Question> {
    return this.http.post<Question>(this.apiUrl, question);
  }

    
  addQuestionAvecFormID(question: Question, id: number): Observable<Question> {
    return this.http.post<Question>(`${this.apiUrl}/${id}`, question);
  }



  updateQuestion(id: number, question: Question): Observable<Question> {
    const url = `${this.apiUrl}/${question.id}`;
    return this.http.put<Question>(url, question);
  }



  deleteQuestion(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
