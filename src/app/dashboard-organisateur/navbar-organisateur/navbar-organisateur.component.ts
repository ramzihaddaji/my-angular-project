import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserCOA } from 'src/app/private/model/userCOA';
import { UserCOAService } from 'src/app/private/service/user-coa.service';

@Component({
  selector: 'app-navbar-organisateur',
  templateUrl: './navbar-organisateur.component.html',
  styleUrls: ['./navbar-organisateur.component.css']
})
export class NavbarOrganisateurComponent {

  searchTerm: string = ''; // Variable pour stocker le terme de recherche
  filteredItems: any[] = []; // Tableau pour stocker les éléments filtrés

  items: any[] = [/* Vos éléments de navigation */]; // Mettez à jour avec vos éléments de navigation
  userId: string | null = null;
  notifications?: { notification: string }[];

  constructor(
    private route: ActivatedRoute,
  private authCOAService : UserCOAService) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId != null && this.userId != 'new') {
      this.loadNotifications();
  }
}

loadNotifications() {
  this.authCOAService.getUtilisateurByIdCOA(Number(this.userId)).subscribe((user: UserCOA) => {
    // Vérifiez d'abord si les notifications existent et sont une chaîne non vide
    if (user.notification && user.notification.trim() !== '') {
      // Divisez la chaîne de notifications en un tableau en utilisant la virgule comme séparateur
      const notificationArray = user.notification.split(',');
      
      // Initialisez un tableau vide pour stocker les notifications restructurées
      this.notifications = [];

      // Parcourez chaque notification dans le tableau
      notificationArray.forEach(notification => {
        // Ajoutez chaque notification restructurée dans le tableau
        this.notifications!.push({ notification: notification.trim() });
      });
    } else {
      // Si aucune notification n'est trouvée, initialisez notifications comme un tableau vide
      this.notifications = [];
    }

    console.log(this.notifications);
  });
}


  filterItems() {
    if (this.searchTerm.trim() !== '') {
      this.filteredItems = this.items.filter(item => {
        // Filtrer les éléments en fonction du terme de recherche
        return item.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    } else {
      // Si le terme de recherche est vide, afficher tous les éléments
      this.filteredItems = this.items;
    }
  }

}
