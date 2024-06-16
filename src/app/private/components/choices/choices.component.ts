import { Component } from '@angular/core';
import { Choice } from '../../model/choice';
import { ChoiceService } from '../../service/choice.service';

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent {

  ChoiceList: Choice[] = [];

  constructor(private choiceService : ChoiceService) {}

  ngOnInit(): void {
    this.displayChoice();
  }


  displayChoice(){
    this.choiceService.getAllChoice().subscribe((res) => {
      this.ChoiceList = res ;
      console.log(res);
    });
  }

  selectedChoice!: Choice ;
  selectChoice(Choice: any){
    this.selectedChoice = Choice ;
  }


    deleteChoice() {
      if (this.selectedChoice.id) {
        this.choiceService.deleteChoice(this.selectedChoice.id)
        .subscribe((res)=> {
          console.log(res) ;
          this.displayChoice() ;
        });
      }
    }

}
