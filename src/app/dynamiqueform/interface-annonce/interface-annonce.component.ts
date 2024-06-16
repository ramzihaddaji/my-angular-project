import { Component } from '@angular/core';
import { Router, UrlSegment, UrlTree } from '@angular/router';
import { FormService } from 'src/app/private/service/form.service';

@Component({
  selector: 'app-interface-annonce',
  templateUrl: './interface-annonce.component.html',
  styleUrls: ['./interface-annonce.component.css']
})
export class InterfaceAnnonceComponent {
  evenementId: number = 0; // Modifier en fonction de votre besoin

  constructor(
    private router: Router, 
    private formService: FormService,
  ) { }

    ngOnInit(): void {

    }

  createForm() {
    // Extraire l'ID de l'URL
    const urlTree: UrlTree = this.router.parseUrl(this.router.url);
    const urlSegment: UrlSegment[] = urlTree.root.children['primary'].segments;
  
    let eventId: number | null = null;
  
    if (urlSegment && urlSegment.length > 0) {
      const idSegment: UrlSegment = urlSegment[urlSegment.length - 1];
      eventId = +idSegment.path;
    }
  
    if (eventId === null || isNaN(eventId)) {
      console.error("L'ID de l'événement dans l'URL est invalide.");
      return;
    }
  
    this.formService.addFormWithID(eventId).subscribe(
      (response: any) => {
        if (response && response.formId) { // Utilisez la clé correcte
          // Rediriger vers la page du formulaire avec l'ID récupéré
          this.router.navigate(['/createForm', response.formId]);
        } else {
          console.error("L'ID du formulaire n'a pas été renvoyé dans la réponse.");
        }
      },
      (error) => {
        console.error("Une erreur s'est produite lors de la création du formulaire :", error);
      }
    );

   
  }
  

}
