import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

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
