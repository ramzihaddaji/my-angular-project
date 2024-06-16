import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inscription } from 'src/app/private/model/Inscription';
import { QuestionResponse } from 'src/app/private/model/QuestionResponse';
import { InscriptionService } from 'src/app/private/service/inscription.service';
import { QuestionResponseServiceService } from 'src/app/private/service/question-response-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-filtre-inscri',
  templateUrl: './filtre-inscri.component.html',
  styleUrls: ['./filtre-inscri.component.css']
})
export class FiltreInscriComponent {

  InscriptionList: Inscription[] = [];
  ResponseList: QuestionResponse[] = [];
  evenementID: string | null = null;

  constructor(private inscriptionService : InscriptionService,
    private location:Location,
    private questionResponse : QuestionResponseServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.evenementID = this.route.snapshot.paramMap.get('id');
    if (this.evenementID != null && this.evenementID != 'new') {
      this.displayInscriptionEvent(Number(this.evenementID));
    }
  }
  onBack()
  {
    this.location.back();
  }

  displayInscriptionEvent(id: number){
    this.inscriptionService.getInscriptionByEvenementId(id).subscribe((res) => {
      this.InscriptionList = res ;
    });
  }

  getActiveInscriptions(): Inscription[] {
    return this.InscriptionList.filter(inscription => inscription.status === 'actif');
  }

  displayResponse(inscri: QuestionResponse){
    this.questionResponse.getResponseByInscriptionId(Number(inscri.id)).subscribe((res) => {
      this.ResponseList = res ;
    });
  }

  selectedInscription!: Inscription ;
  selectInscription(Inscription: any){
    this.selectedInscription = Inscription ;
  }

  deleteInscription() {
    if (this.selectedInscription.id) {
      this.inscriptionService.deleteInscription(this.selectedInscription.id)
      .subscribe((res)=> {
        console.log(res) ;
      });
    }
  }

  updateStatus(id: number | undefined, newStatus: string | undefined): void {
    if (id !== undefined && newStatus !== undefined) {
      this.inscriptionService.updateInscriStatus(id, newStatus).subscribe(() => {
      }, (error) => {
        console.error(error);
      });
    } else {
      console.error('Event ID or new status is undefined');
    }
  }


  


}
