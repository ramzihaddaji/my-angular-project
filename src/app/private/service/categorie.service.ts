import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie';


@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  baseUrl = 'http://localhost:8082/api/auth/evenements'

  constructor(private httpclient : HttpClient) { }
  getAllCategorie(){
    return this.httpclient.get<Categorie[]>(this.baseUrl + '/categorie')
  } 
  deleteCategorie(id: number){
    return this.httpclient.delete(this.baseUrl + '/categorie/' +id)
  }
  addCategorie(categorie: Categorie) {
    return this.httpclient.post(this.baseUrl + '/categorie',categorie)
  }
  editCategorie(id: number, categorie:Categorie) {
    return this.httpclient.put(this.baseUrl + '/categorie/' + id , categorie);
  }
  getCategorieById(id : number) {
    return this.httpclient.get<Categorie>(this.baseUrl+ '/categorie/' + id) ;
  }
}
