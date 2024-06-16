import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ressources } from 'src/app/private/model/Ressources';
import { SousCategories } from 'src/app/private/model/SousCategories';
import { UserCOA } from 'src/app/private/model/userCOA';
import { RessourceService } from 'src/app/private/service/ressource.service';
import { SousCategoriesService } from 'src/app/private/service/sous-categories.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ressource-details',
  templateUrl: './ressource-details.component.html',
  styleUrls: ['./ressource-details.component.css']
})
export class RessourceDetailsComponent {
  ressources: Ressources = {
  };
  currentUser!: UserCOA;
  ressourcesId: string | null = null;
  userID?: string | null = null; ;
  ressourceForm: FormGroup; 
  souscategories: SousCategories[] = [];
  newRessource: any = {};
  constructor(
    private location:Location,
    private ressourceService: RessourceService,
    private sousCategorieService : SousCategoriesService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.ressourceForm = this.fb.group({
      nom: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.userID = this.route.snapshot.paramMap.get('id');
    console.log(this.userID);
    this.loadSousCategories();

  }

  onBack()
  {
    this.location.back();
  }
  loadSousCategories() {
    this.sousCategorieService.getAllSousCategories().subscribe((res: SousCategories[]) => {
      this.souscategories = res;
    });
    if (this.ressourcesId != null && this.ressourcesId != 'new') {
      this.displayressources(Number(this.ressourcesId));
    }
  }

  displayressources(id: number) {
    this.ressourceService.getRessourcesById(id).subscribe((res) => {
      this.ressources = res;
    });
  }

  deleteressources() {
    if (this.ressources.id) {
      this.ressourceService.deleteRessources(this.ressources.id)
      .subscribe((res)=> {
        console.log(res);

        this.router.navigate(['dashboardcollaborateur'+this.userID+'/ressources/'+this.userID]); // Rediriger vers la liste des événements après la suppression
      });
    }
  }

  saveressources() {
    if (this.ressources?.id) {
      this.updateressources(this.ressources?.id);
    } else {
      this.addressources();
    }
}

addressources() {
  this.ressources.collaborateurId = Number(this.userID) || 0; // Extraction de collaborateurId depuis localStorage
  this.ressources.sousCategorieId = Number(this.ressources.sousCategorieId); // Conversion de sousCategorieId en nombre
  this.ressources.prixRes = Number(this.ressources.prixRes);
  this.ressources.quantite = Number(this.ressources.quantite);
  this.ressourceService.addRessources(this.ressources).subscribe((res: any) => {
    this.ressources.id = res.id; 
    console.log(res);
    Swal.fire({
      title: 'Ressource ajoutée avec succès !',
      icon: 'success',
    })
  });
  history.back();
}

  updateressources(id: number) {
    if (this.ressourcesId) {
      this.ressourceService.editRessources(id, this.ressources).subscribe((res) => {
        console.log(res);
      });
    }
}

}
