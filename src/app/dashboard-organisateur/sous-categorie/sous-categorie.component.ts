import { Component, OnInit } from '@angular/core';
import { SousCategories } from 'src/app/private/model/SousCategories';
import { SousCategoriesService } from 'src/app/private/service/sous-categories.service';

@Component({
  selector: 'app-sous-categorie',
  templateUrl: './sous-categorie.component.html',
  styleUrls: ['./sous-categorie.component.css']
})
export class SousCategorieComponent implements OnInit {
  CategorieList: SousCategories[] = [];
  sousCategorie: SousCategories = {} as SousCategories; // Initialize with an empty object
  selectedCategorie: SousCategories = {} as SousCategories; // Initialize with an empty object

  constructor(private sousCategorieService: SousCategoriesService) {}

  ngOnInit(): void {
    this.displayCategorie();
  }

  displayCategorie() {
    this.sousCategorieService.getAllSousCategories().subscribe((res) => {
      this.CategorieList = res;
      console.log(res);
    });
  }

  selectCategorie(categorie: SousCategories) {
    this.selectedCategorie = { ...categorie }; 
  }

  deleteCategorie() {
    if (this.selectedCategorie.id) {
      this.sousCategorieService.deleteSousCategories(this.selectedCategorie.id).subscribe((res) => {
        console.log(res);
        this.displayCategorie();
        this.resetSelectedCategorie();
      });
    }
  }

  saveRessources() {
    if (this.selectedCategorie.id) {
      this.sousCategorieService.editSousCategories(this.selectedCategorie.id, this.selectedCategorie).subscribe(() => {
        this.displayCategorie();
        this.resetSelectedCategorie();
      });
    } else {
      this.addCategorie();
    }
  }

  addCategorie() {
    this.sousCategorieService.addSousCategories(this.selectedCategorie).subscribe((res) => {
      console.log(res);
      this.displayCategorie();
      this.resetSelectedCategorie();
    });
  }

  resetSelectedCategorie() {
    this.selectedCategorie = {} as SousCategories;
  }
}
