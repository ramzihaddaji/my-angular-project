import { Component, OnInit } from '@angular/core';
import { AuthentificationCOAService } from 'src/app/auth/service/authentification-coa.service';
import { AuthentificationService } from 'src/app/auth/service/authentification.service';
import { Inscription } from 'src/app/private/model/Inscription';
import { Categorie } from 'src/app/private/model/categorie';
import { CategorieService } from 'src/app/private/service/categorie.service';
import { InscriptionService } from 'src/app/private/service/inscription.service';


@Component({
  selector: 'app-navbarindex',
  templateUrl: './navbarindex.component.html',
  styleUrls: ['./navbarindex.component.css']
})
export class NavbarindexComponent implements OnInit {
  showEventDropdown = false;
  showCreateDropdown = false;
  showServicesDropdown = false;
  categories: Categorie[] = [];
  showCategoryDropdown = false;
  isLoggedIn = false; // Variable pour indiquer si l'utilisateur est connecté
  isAdminLoggedIn = false; // Variable pour indiquer si l'administrateur est connecté
  data?: boolean=false;
  userData: any; // Variable pour stocker les informations sur l'utilisateur
  role: string | undefined; // Variable pour stocker le rôle de l'utilisateur
  userId?: number;
  
  inscriptionList: Inscription[] = [];


  constructor(private categorieService: CategorieService
    , private authService: AuthentificationService ,
    private inscriService: InscriptionService,
    private authServiceCOA: AuthentificationCOAService ) { }

    ngOnInit(): void {
      this.loadCategories();
      if( localStorage.getItem('token') || localStorage.getItem('admindata')  || localStorage.getItem('userdata'))
        {
          this.data=true;
        }
        if (localStorage.getItem('admindata')) {
          this.userData = JSON.parse(localStorage.getItem('admindata') || '{}');
          this.role = this.userData?.role; // Récupérer le rôle de l'utilisateur
          this.userId = this.userData?.id as number; // Récupérer l'ID de l'utilisateur
          this.isAdminLoggedIn = true;
        } else if (localStorage.getItem('userdata')) { // Si l'utilisateur est connecté en tant qu'utilisateur normal
          this.userData = JSON.parse(localStorage.getItem('userdata') || '{}');
          this.role = this.userData?.role; // Récupérer le rôle de l'utilisateur
          
          this.userId = this.userData?.id as number; // Récupérer l'ID de l'utilisateur
          this.isLoggedIn = true;
          this.displayInscription(this.userId);
        }
        
  
      
    }

  

  loadCategories(): void {
    this.categorieService.getAllCategorie().subscribe(categories => {
      this.categories = categories;
    });
  }


  logout(): void {
    localStorage.clear; // Déconnexion de l'administrateur
  }


  // ngOnInit(): void {
  //   const userIdStr = this.route.snapshot.paramMap.get('id');
  //   if (userIdStr) {
  //     this.userId = Number(userIdStr);
  //     this.displayInscription(this.userId);
  //   } else {
  //     console.error("User ID is null");
  //   }
  // }

  displayInscription(userId: number) {
    this.inscriService.getInscriptionByUtilisateurId(userId).subscribe((res: Inscription[]) => {
      this.inscriptionList = res;
      console.log(res);
    }, (error) => {
      console.error('Failed to fetch inscriptions', error);
    });
  }
  
}
