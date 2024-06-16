import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Choice } from '../model/choice';

@Injectable({
  providedIn: 'root'
})
export class ChoiceService {

  baseUrl = 'http://localhost:8082/api/auth/evenements'

  constructor(private httpclient : HttpClient) { }
  getAllChoice(){
    return this.httpclient.get<Choice[]>(this.baseUrl + '/choice')
  } 
  deleteChoice(id: number){
    return this.httpclient.delete(this.baseUrl + '/choice/' +id)
  }
  addChoice(choice: Choice) {
    return this.httpclient.post(this.baseUrl + '/choice',choice)
  }
  editChoice(id: number, choice:Choice) {
    return this.httpclient.put(this.baseUrl + '/choice/' + id , choice);
  }
  getChoiceById(id : number) {
    return this.httpclient.get<Choice>(this.baseUrl+ '/choice/' + id) ;
  }

  getChoicesByQuestionId(questionId: number) {
    return this.httpclient.get<Choice[]>(this.baseUrl + '/choice/question/' + questionId);
  }
}
