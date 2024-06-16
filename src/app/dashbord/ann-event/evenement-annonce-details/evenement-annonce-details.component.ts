import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/private/model/categorie';
import { Evenement } from 'src/app/private/model/evenement';
import { CategorieService } from 'src/app/private/service/categorie.service';
import { EvenementService } from 'src/app/private/service/evenement.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-evenement-annonce-details',
  templateUrl: './evenement-annonce-details.component.html',
  styleUrls: ['./evenement-annonce-details.component.css']
})
export class EvenementAnnonceDetailsComponent {

  
  evenement: Evenement = {};
  evenementId: string | null = null;
  categories: Categorie[] = [];

  constructor(
    private location:Location,
    private evenementService: EvenementService,
    private route: ActivatedRoute,
    private router: Router ,
    private categorieService : CategorieService
  ) {}



  loadCategories(): void {
    this.categorieService.getAllCategorie().subscribe(categories => {
      this.categories = categories;
    });
  }
  onBack()
  {
    this.location.back();
  }




  ngOnInit(): void {
    this.evenementId = this.route.snapshot.paramMap.get('id');
    if (this.evenementId != null && this.evenementId != 'new') {
      this.displayEvenement(Number(this.evenementId));
    }
    this.loadCategories();
  }

  displayEvenement(id: number) {
    this.evenementService.getEvenementById(id).subscribe((res) => {
      this.evenement = res;
    });
  }

  deleteEvenement() {
    if (this.evenement.id) {
      this.evenementService.deleteEvenement(this.evenement.id)
      .subscribe((res)=> {
        console.log(res);
        this.router.navigate(['/evenement']); // Rediriger vers la liste des événements après la suppression
      });
    }
  }
  addEvenement() {
    this.evenementService.addEvenementOrganisation(this.evenement).subscribe((res) => {
      console.log(res);
      // Rediriger l'utilisateur vers une autre page ou rafraîchir la liste des événements
    });
  }

  saveEvenement() {
    if (this.evenement?.id) {
      this.updateEvenement(this.evenement.id);
    } else {
      this.addEvenement();
    }
  }

  updateEvenement(id: number) {
    this.evenementService.editEvenement(id, this.evenement).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/dashboardadmin']); // Rediriger vers la liste des événements après la mise à jour
    });
  }

  onFileSelected(event: any) {
    
    const file: File = event.target.files[0];

    if (file) {
      // Read the file and convert it to base64
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        // Set the base64 string to the employee's url property
        this.evenement!.image = reader.result as string;
        
      };
    }
  }


}
