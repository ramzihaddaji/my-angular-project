import { Component } from '@angular/core';
import { Field } from '../public/model/Field';
import { QuestionService } from '../private/service/question.service';
import { Question } from '../private/model/Question';
import { Choice } from '../private/model/choice';
import { ChoiceService } from '../private/service/choice.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dynamiqueform',
  templateUrl: './dynamiqueform.component.html',
  styleUrls: ['./dynamiqueform.component.css']
})
export class DynamiqueformComponent {
  title: string = ''; 
  type: string = '';
  fields: Field[] = [];
  options: string[] = [];
  option: string='';
  showPopup: boolean = false;

  constructor(private questionService: QuestionService ,private choiceService : ChoiceService, private router: Router ) {}

  togglePopup() {
    this.showPopup = !this.showPopup;
  }

  removeField(index: number) {
    this.fields.splice(index, 1);
  }

  addField(title: string, type: string) {
    const newField: Field = { title, type };
    if (type === 'select' || type === 'radio') {
      newField.options = [...this.options];
    } else if (type === 'radio') {
      newField.options = this.options; // Utiliser les options saisies par l'utilisateur
    }
    this.fields.push(newField);
    
    // Réinitialiser les valeurs après l'ajout du champ
    this.title = '';
    this.type = '';
    this.options = [];
  }
  

  addOption() {
    if (this.options === null || this.options === undefined) {
      this.options = [];
    }
    this.options.push(this.option);
    this.option = '';
  }
  

  onSubmit() {
    const questions: Question[] = this.fields.map(field => {
      const choices = field.options ? field.options.map(option => option) : [];
      return {
        title: field.title,
        inputType: field.type,
        choices: choices
      };
    });
  
    const formId = window.location.pathname.split('/').pop(); // Obtenez l'ID du formulaire depuis l'URL
  
    // Envoyez chaque question avec ses choix associés au backend
    questions.forEach(question => {
      this.questionService.addQuestionAvecFormID(question, parseInt(formId || '0')).subscribe(
        response => {
          console.log('Question added successfully:', response);
          // Réinitialisez le formulaire après avoir ajouté chaque question
          this.fields = [];
          this.router.navigate(['/home']);
          Swal.fire({
            title: 'Votre formulaire ajoutée avec succès!',
            
            icon: 'success',
          });
        },
        error => {
          console.error('Error adding question:', error);
          // Gérez l'erreur - affichez un message à l'utilisateur, par exemple
        }
      );
    });
  }
  
  
}
