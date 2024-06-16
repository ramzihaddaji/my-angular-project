import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/private/model/categorie';
import { Evenement } from 'src/app/private/model/evenement';
import { CategorieService } from 'src/app/private/service/categorie.service';
import { EvenementService } from 'src/app/private/service/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-organise-event',
  templateUrl: './organise-event.component.html',
  styleUrls: ['./organise-event.component.css']
})
export class OrganiseEventComponent {
  detailEvenet?: Evenement;

  eventOrg: Evenement = {
    frais: 'gratuit',
    typeEvenement : 'Public'
  };
  fraisType?: 'gratuit' | 'payant';
  typeEvenement?: 'privee' | 'Public';
  categories: Categorie[] = [];
  categoriesP: Categorie[] = [];
  categoriesB: Categorie[] = [];

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

  constructor(private evenementService: EvenementService, private categorieService: CategorieService, private router: Router) {}

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

  addEventOrg() {
    // Vérifier si tous les champs sont remplis
    if (!this.eventOrg.nom ||
        !this.eventOrg.date_debut ||
        !this.eventOrg.date_fin ||
        !this.eventOrg.lieu ||
        (this.eventOrg.typeEvenement === 'Public' && !this.eventOrg.nombreDePlace) ||
        (this.fraisType === 'payant' && !this.eventOrg.frais)) {
      // Définir les variables de contrôle correspondantes sur true
      this.nomInvalid = !this.eventOrg.nom;
      this.descriptionInvalid = !this.eventOrg.description;
      this.dateDebutInvalid = !this.eventOrg.date_debut;
      this.dateFinInvalid = !this.eventOrg.date_fin;
      this.lieuInvalid = !this.eventOrg.lieu;
      this.typeEvenementE = !this.eventOrg.typeEvenement;
      this.nombreDePlaceInvalid = !this.eventOrg.nombreDePlace;
      this.typeFrais = !this.eventOrg.frais;
      this.categorieE = !this.eventOrg.categorieId;
      this.imageE = !this.eventOrg.image;
      return; // Arrêter l'exécution si des champs sont vides
    }
    if (!this.eventOrg.date_debut || !this.eventOrg.date_fin) {
      console.error('Date de début ou date de fin non définie.');
      return;
    }

    // Valider les dates d'abord
    const dateDebut = new Date(this.eventOrg.date_debut);
    const dateFin = new Date(this.eventOrg.date_fin);
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

    // Ajouter l'événement si tous les champs sont remplis
    this.evenementService.addEvenementOrganisation(this.eventOrg).subscribe((res: any) => {
      console.log(res);
  
      if (res && res.eventId) {
        Swal.fire({
          title: 'Evenement saved Success!',
          text: 'You clicked the button!',
          icon: 'success',
        });
  
        this.router.navigate(['/organiserEvent', res.eventId]);
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
        this.eventOrg!.image = reader.result as string;
      };
    }
  }
}
