import { Component, OnInit } from '@angular/core';
import { Router, UrlSegment, UrlTree } from '@angular/router';
import { Formulaire } from 'src/app/private/model/Formulaire';
import { Question } from 'src/app/private/model/Question';
import { ChoiceService } from 'src/app/private/service/choice.service';
import { FormService } from 'src/app/private/service/form.service';
import { InscriptionService } from 'src/app/private/service/inscription.service';
import { QuestionService } from 'src/app/private/service/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscription-event',
  templateUrl: './inscription-event.component.html',
  styleUrls: ['./inscription-event.component.css']
})
export class InscriptionEventComponent implements OnInit {
  formulaire: Formulaire | undefined;
  questions: Question[] = [];
  currentUser: any;
  inscriptionData: any = {
    date_inscription: new Date().toISOString(),
    status: 'en_cours',
    evenementId: null,
    utilisateurId: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    questionResponses: [],
  };

  constructor(
    private router: Router,
    private formService: FormService,
    private questionService: QuestionService,
    private inscriptionService: InscriptionService,
    private choiceService: ChoiceService
  ) {}

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('userdata') || '{}');
    this.createForm();
  }

  createForm() {
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

    this.inscriptionData.evenementId = eventId;

    this.formService.getFormsByEvenementId(eventId).subscribe(
      (forms: any[]) => {
        if (forms && forms.length > 0) {
          this.formulaire = forms[0];

          if (this.formulaire && this.formulaire.id) {
            this.getQuestionsForForm(this.formulaire.id);
          } else {
            console.error("Aucun formulaire n'a été trouvé pour cet événement.");
          }
        }
      },
      (error) => {
        console.error("Une erreur s'est produite lors de la récupération du formulaire :", error);
      }
    );
  }

  getQuestionsForForm(formId: number) {
    this.questionService.getQuestionsByFormId(formId).subscribe(
      (questions: any[]) => {
        if (questions && questions.length > 0) {
          this.questions = questions;

          this.questions.forEach(question => {
            if (question.inputType === 'radio' || question.inputType === 'select') {
              if (question.id !== undefined) {
                this.choiceService.getChoicesByQuestionId(question.id).subscribe(
                  (choices: any[]) => {
                    question.choices = choices.map(choice => choice.label);
                    console.log('Choix associés à la question', question.title, ':', question.choices);
                  },
                  (error) => {
                    console.error("Erreur lors de la récupération des choix pour la question :", question.title, error);
                  }
                );
              } else {
                console.error("L'ID de la question est undefined.");
              }
            }
          });
        } else {
          console.error("Aucune question n'a été trouvée pour ce formulaire.");
        }
      },
      (error) => {
        console.error("Une erreur s'est produite lors de la récupération des questions :", error);
      }
    );
  }
  

  createInscription() {
    this.inscriptionData.utilisateurId = this.currentUser.id;
console.log("11",this.inscriptionData);

    this.questions.forEach(question => {

      
      this.inscriptionData.questionResponses.push({
        questionId: question.id,
        response: question.userResponse || ''
      });
      console.log(this.inscriptionData)
    });
    this.inscriptionService.addInscription(this.inscriptionData).subscribe(
      (response) => {
        console.log("Inscription créée avec succès :", response);
        Swal.fire({
          title: 'Inscription ajoutée avec succès!',
          
          icon: 'success',
        });
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error("Erreur lors de la création de l'inscription :", error);
      }
    );
  }
}
