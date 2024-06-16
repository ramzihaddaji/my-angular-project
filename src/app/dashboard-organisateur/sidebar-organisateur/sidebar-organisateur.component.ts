import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar-organisateur',
  templateUrl: './sidebar-organisateur.component.html',
  styleUrls: ['./sidebar-organisateur.component.css']
})
export class SidebarOrganisateurComponent {

  userId: string | null = null;
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    console.log(this.userId);
  }

    
  logout(): void {
    localStorage.clear; // Déconnexion de l'administrateur
  }


}
