import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SousCategories } from 'src/app/private/model/SousCategories';
import { SousCategoriesService } from 'src/app/private/service/sous-categories.service';

@Component({
  selector: 'app-sous-categorie-details',
  templateUrl: './sous-categorie-details.component.html',
  styleUrls: ['./sous-categorie-details.component.css']
})
export class SousCategorieDetailsComponent {
  categorie: SousCategories = {};
  categorieId: string | null = null;

  categorieForm: FormGroup; 

  constructor(
    private sousCategorieService: SousCategoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.categorieForm = this.fb.group({
      nom: ['', Validators.required],
    });
  }





  ngOnInit(): void {
    this.categorieId = this.route.snapshot.paramMap.get('id');
    if (this.categorieId != null && this.categorieId != 'new') {
      this.displayCategorie(Number(this.categorieId));
    }
  }

  displayCategorie(id: number) {
    this.sousCategorieService.getSousCategoriesById(id).subscribe((res) => {
      this.categorie = res;
    });
  }



  deleteCategorie() {
    if (this.categorie.id) {
      this.sousCategorieService.deleteSousCategories(this.categorie.id)
      .subscribe((res)=> {
        console.log(res);
        this.router.navigate(['/categorie']); // Rediriger vers la liste des événements après la suppression
      });
    }
  }

  addCategorie() {
    this.sousCategorieService.addSousCategories(this.categorie).subscribe((res) => {
      console.log(res);
    });
    
  }

  saveCategorie() {
    if (this.categorie?.id) {
      this.updateCategorie(this.categorie?.id);
    } else {
      this.addCategorie();
    }
  }
  
  updateCategorie(id: number) {
    if (this.categorieId) {
      this.sousCategorieService.editSousCategories(id, this.categorie).subscribe((res) => {
        console.log(res);
      });
    }
}

}

