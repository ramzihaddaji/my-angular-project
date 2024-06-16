import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Choice } from 'src/app/private/model/choice';
import { ChoiceService } from 'src/app/private/service/choice.service';

@Component({
  selector: 'app-details-choices',
  templateUrl: './details-choices.component.html',
  styleUrls: ['./details-choices.component.css']
})
export class DetailsChoicesComponent {

  choice: Choice = {};
  choiceId: string | null = null;

  choiceForm: FormGroup; 

  constructor(
    private choiceService: ChoiceService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder 
  ) {
    this.choiceForm = this.fb.group({
      nom: ['', Validators.required],
    });
  }





  ngOnInit(): void {
    this.choiceId = this.route.snapshot.paramMap.get('id');
    if (this.choiceId != null && this.choiceId != 'new') {
      this.displayChoice(Number(this.choiceId));
    }
  }

  displayChoice(id: number) {
    this.choiceService.getChoiceById(id).subscribe((res) => {
      this.choice = res;
    });
  }



  deleteChoice() {
    if (this.choice.id) {
      this.choiceService.deleteChoice(this.choice.id)
      .subscribe((res)=> {
        console.log(res);
        this.router.navigate(['/choice']); // Rediriger vers la liste des événements après la suppression
      });
    }
  }

  addChoice() {
    this.choiceService.addChoice(this.choice).subscribe((res) => {
      console.log(res);
    });
  }

  saveChoice() {
    if (this.choice?.id) {
      this.updateChoice(this.choice?.id);
    } else {
      this.addChoice();
    }
  }
  
  updateChoice(id: number) {
    if (this.choiceId) {
      this.choiceService.editChoice(id, this.choice).subscribe((res) => {
        console.log(res);
      });
    }
}

}
