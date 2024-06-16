import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData: any = {};

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    // Envoi des données du formulaire au backend
    this.http.post<any>('/api/forms', this.formData).subscribe(
      response => {
        // Traitement de la réponse du backend si nécessaire
        console.log('Formulaire envoyé avec succès :', response);
      },
      error => {
        // Gestion des erreurs de requête si nécessaire
        console.error('Erreur lors de l\'envoi du formulaire :', error);
      }
    );
  }
}
