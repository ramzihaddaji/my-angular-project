import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commentaire } from '../model/Commentaire';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {


  baseUrl = 'http://localhost:8082/api/auth/evenements'

  constructor(private httpclient : HttpClient) { }
  getAllCommentaire(){
    return this.httpclient.get<Commentaire[]>(this.baseUrl + '/commentaire')
  } 
  deleteCommentaire(id: number){
    return this.httpclient.delete(this.baseUrl + '/commentaire/' +id)
  }
  addCommentaire(commentaire: Commentaire) {
    return this.httpclient.post(this.baseUrl + '/commentaire',commentaire)
  }
  editCommentaire(id: number, commentaire:Commentaire) {
    return this.httpclient.put(this.baseUrl + '/commentaire/' + id , commentaire);
  }
  getCommentaireById(id : number) {
    return this.httpclient.get<Commentaire>(this.baseUrl+ '/commentaire/' + id) ;
  }
}

