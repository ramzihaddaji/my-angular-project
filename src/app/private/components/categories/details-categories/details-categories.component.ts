import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/private/model/categorie';
import { CategorieService } from 'src/app/private/service/categorie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-categories',
  templateUrl: './details-categories.component.html',
  styleUrls: ['./details-categories.component.css']
})
export class DetailsCategoriesComponent {

  categorie: Categorie = {};
  categorieId: string | null = null;

  categorieForm: FormGroup; 

  constructor(
    private location:Location,
    private categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder 
  ) {
    this.categorieForm = this.fb.group({
      nom: ['', Validators.required],
    });
  }

  onBack()
  {
    this.location.back();
  }





  ngOnInit(): void {
    this.categorieId = this.route.snapshot.paramMap.get('id');
    if (this.categorieId != null && this.categorieId != 'new') {
      this.displayCategorie(Number(this.categorieId));
    }
  }

  displayCategorie(id: number) {
    this.categorieService.getCategorieById(id).subscribe((res) => {
      this.categorie = res;
    });
  }



  deleteCategorie() {
    if (this.categorie.id) {
      this.categorieService.deleteCategorie(this.categorie.id)
      .subscribe((res)=> {
        console.log(res);
        this.router.navigate(['/categorie']); // Rediriger vers la liste des événements après la suppression
      });
    }
  }

  addCategorie() {
    this.categorieService.addCategorie(this.categorie).subscribe((res) => {
      console.log(res);
    });
    history.back();
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
      this.categorieService.editCategorie(id, this.categorie).subscribe((res) => {
        console.log(res);
      });
    }
}
}