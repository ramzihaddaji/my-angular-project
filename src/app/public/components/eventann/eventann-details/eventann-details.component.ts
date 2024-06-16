import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evenement } from 'src/app/private/model/evenement';
import { EvenementService } from 'src/app/private/service/evenement.service';

@Component({
  selector: 'app-eventann-details',
  templateUrl: './eventann-details.component.html',
  styleUrls: ['./eventann-details.component.css']
})
export class EventannDetailsComponent {


  constructor(private evenementService: EvenementService, private router: Router, private route: ActivatedRoute) { }

  selectedEvenement: Evenement | null = null;

  ngOnInit(): void {
    // Récupérer l'ID de l'événement à partir de l'URL
    this.route.params.subscribe(params => {
      const eventId = +params['id']; // Convertir l'ID en nombre
      // Utiliser l'ID pour récupérer les détails de l'événement
      this.evenementService.getEvenementById(eventId).subscribe((evenement: Evenement) => {
        this.selectedEvenement = evenement;
      });
    });
  }
  
}
