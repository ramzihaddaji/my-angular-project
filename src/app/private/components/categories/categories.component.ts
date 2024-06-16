import { Component } from '@angular/core';
import { Categorie } from '../../model/categorie';
import { Router } from '@angular/router';
import { CategorieService } from '../../service/categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  CategorieList: Categorie[] = [];

  constructor(private categorieService : CategorieService) {}

  ngOnInit(): void {
    this.displayCategorie();
  }


  displayCategorie(){
    this.categorieService.getAllCategorie().subscribe((res) => {
      this.CategorieList = res ;
      console.log(res);
    });
  }

  selectedCategorie!: Categorie ;
  selectCategorie(Categorie: any){
    this.selectedCategorie = Categorie ;
  }


    deleteCategorie() {
      if (this.selectedCategorie.id) {
        this.categorieService.deleteCategorie(this.selectedCategorie.id)
        .subscribe((res)=> {
          console.log(res) ;
          this.displayCategorie() ;
        });
      }
    }
  }
