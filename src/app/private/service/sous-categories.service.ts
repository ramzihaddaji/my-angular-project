import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SousCategories } from '../model/SousCategories';

@Injectable({
  providedIn: 'root'
})
export class SousCategoriesService {

  baseUrl = 'http://localhost:8082/api/auth/evenements'

  constructor(private httpclient : HttpClient) { }
  getAllSousCategories(){
    return this.httpclient.get<SousCategories[]>(this.baseUrl + '/sous-categories')
  } 
  deleteSousCategories(id: number){
    return this.httpclient.delete(this.baseUrl + '/sous-categories/' +id)
  }
  addSousCategories(sousCategories: SousCategories) {
    return this.httpclient.post(this.baseUrl + '/sous-categories',sousCategories)
  }
  editSousCategories(id: number, sousCategories:SousCategories) {
    return this.httpclient.put(this.baseUrl + '/sous-categories/' + id , sousCategories);
  }
  getSousCategoriesById(id : number) {
    return this.httpclient.get<SousCategories>(this.baseUrl+ '/sous-categories/' + id) ;
  }
}
