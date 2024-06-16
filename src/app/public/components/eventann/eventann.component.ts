import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/private/model/categorie';
import { CategorieService } from 'src/app/private/service/categorie.service';
import { Evenement } from 'src/app/private/model/evenement';
import { EvenementService } from 'src/app/private/service/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eventann',
  templateUrl: './eventann.component.html',
  styleUrls: ['./eventann.component.css']
})
export class EventannComponent implements OnInit {
  eventAnn: Evenement = {
    frais: 'gratuit',
    typeEvenement : 'Public'
  };

  fraisType?: 'gratuit' | 'payant';
  typeEvenement?: string;
  categories: Categorie[] = [];
  nomInvalid: boolean = false;
  dateDebutInvalid: boolean = false;
  dateFinInvalid: boolean = false;
  lieuInvalid: boolean = false;
  descriptionInvalid: boolean = false;
  nombreDePlaceInvalid: boolean = false;
  typeEvenementE: boolean = false;
  typeFrais: boolean = false;
  categorieE: boolean = false;
  imageE: boolean = false;
  categoriesP: Categorie[] = [];
  categoriesB: Categorie[] = [];


  constructor(private evenementService: EvenementService, private categorieService : CategorieService, private router: Router) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {
    this.categorieService.getAllCategorie().subscribe(categories => {
      this.categories = categories;
      this.categoriesP = categories.filter(categorie => categorie.type === 'Personnel');
      this.categoriesB = categories.filter(categorie => categorie.type === 'Public');
    });
  }

  getPersonnelCategorie(): Categorie[] {
    return this.categoriesP;
  }

  getPublicCategorie(): Categorie[] {
    return this.categoriesB;
  }

  addEventAnn() {
    // Vérifier si tous les champs sont remplis
    if (!this.eventAnn.nom ||
        !this.eventAnn.description ||
        !this.eventAnn.date_debut ||
        !this.eventAnn.date_fin ||
        !this.eventAnn.lieu ||
        !this.eventAnn.typeEvenement ||
        (this.eventAnn.typeEvenement === 'Public' && (!this.eventAnn.nombreDePlace || !this.fraisType)) ||
        (this.fraisType === 'payant' && !this.eventAnn.frais) ||
        !this.eventAnn.categorieId
      ) {
      console.error('Tous les champs sont requis.');
      // Afficher un message d'erreur à l'utilisateur
      this.nomInvalid = !this.eventAnn.nom;
      this.descriptionInvalid = !this.eventAnn.description;
      this.dateDebutInvalid = !this.eventAnn.date_debut;
      this.dateFinInvalid = !this.eventAnn.date_fin;
      this.lieuInvalid = !this.eventAnn.lieu;
      this.typeEvenementE = !this.eventAnn.typeEvenement;
      this.nombreDePlaceInvalid = !this.eventAnn.nombreDePlace;
      this.typeFrais = !this.eventAnn.frais;
      this.categorieE = !this.eventAnn.categorieId;
      this.imageE = !this.eventAnn.image;
      // Définir d'autres variables de validation pour d'autres champs si nécessaire
      return;
    }

    // Ajouter l'événement si tous les champs sont remplis
    // Check if date_debut and date_fin are defined
    if (!this.eventAnn.date_debut || !this.eventAnn.date_fin) {
      console.error('Date de début ou date de fin non définie.');
      return;
    }

    // Valider les dates d'abord
    const dateDebut = new Date(this.eventAnn.date_debut);
    const dateFin = new Date(this.eventAnn.date_fin);
    const currentDate = new Date();

    if (dateDebut <= currentDate) {
      Swal.fire({
        title: 'Erreur!',
        text: 'La date de début doit être postérieure à la date actuelle.',
        icon: 'error',
      });
      return;
    }

    if (dateFin <= dateDebut) {
      Swal.fire({
        title: 'Erreur!',
        text: 'La date de fin doit être postérieure à la date de début.',
        icon: 'error',
      });
      return;
    }

    // Si les dates sont valides, ajoutez l'événement
    this.evenementService.addEvenementAnnonce(this.eventAnn).subscribe((res: any) => {
      if (res && res.eventId) {
        Swal.fire({
          title: 'Evenement enregistré avec succès!',
          text: 'Vous avez cliqué sur le bouton!',
          icon: 'success',
        });
  
        this.router.navigate(['/AnnonceEvenetF', res.eventId]);
      } else {
        console.error("L'ID de l'événement n'a pas été renvoyé dans la réponse.");
      }
    }, (error) => {
      console.error(error);
    });
  }


  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.eventAnn!.image = reader.result as string;
      };
    }
  }
}
