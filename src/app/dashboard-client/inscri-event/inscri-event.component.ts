import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscription } from 'src/app/private/model/Inscription';
import { QuestionResponse } from 'src/app/private/model/QuestionResponse';
import { Evenement } from 'src/app/private/model/evenement';
import { InscriptionService } from 'src/app/private/service/inscription.service';
import { QuestionResponseServiceService } from 'src/app/private/service/question-response-service.service';

@Component({
  selector: 'app-inscri-event',
  templateUrl: './inscri-event.component.html',
  styleUrls: ['./inscri-event.component.css']
})
export class InscriEventComponent implements OnInit {
  inscriptionList: Inscription[] = [];
  userId: number | null = null;
  ResponseList: QuestionResponse[] = [];

  constructor(
    private inscriService: InscriptionService,
    private questionResponse : QuestionResponseServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const userIdStr = this.route.snapshot.paramMap.get('id');
    if (userIdStr) {
      this.userId = Number(userIdStr);
      this.displayInscription(this.userId);
    } else {
      console.error("User ID is null");
    }
  }

  displayInscription(userId: number) {
    this.inscriService.getInscriptionByUtilisateurId(userId).subscribe((res: Inscription[]) => {
      this.inscriptionList = res;
      console.log(res);
    }, (error) => {
      console.error('Failed to fetch inscriptions', error);
    });
  }
  displayResponse(inscri: QuestionResponse){
    this.questionResponse.getResponseByInscriptionId(Number(inscri.id)).subscribe((res) => {
      this.ResponseList = res ;
      console.log(res);
    });
  }
  
  deleteInscription(id?: number) {
    if (id) {
      this.inscriService.deleteInscription(id).subscribe((res) => {
        console.log(res);
        // Mise à jour de la liste des inscriptions après la suppression
        this.displayInscription(this.userId!);
      }, (error) => {
        console.error('Failed to delete inscription', error);
      });
    }
  }
}
