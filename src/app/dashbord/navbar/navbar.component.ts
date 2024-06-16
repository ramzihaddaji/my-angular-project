import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchTerm: string = ''; // Variable pour stocker le terme de recherche
  filteredItems: any[] = []; // Tableau pour stocker les éléments filtrés

  items: any[] = [/* Vos éléments de navigation */]; // Mettez à jour avec vos éléments de navigation

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
