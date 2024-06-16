import { Component } from '@angular/core';
import { Question } from '../../model/Question';
import { QuestionService } from '../../service/question.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent {

  QuestionList: Question[] = [];

  constructor(private questionService : QuestionService) {}

  ngOnInit(): void {
    this.displayQuestion();
  }


  displayQuestion(){
    this.questionService.getAllQuestions().subscribe((res) => {
      this.QuestionList = res ;
      console.log(res);
    });
  }

  selectedQuestion!: Question ;
  selectQuestion(Question: any){
    this.selectedQuestion = Question ;
  }


    deleteQuestion() {
      if (this.selectedQuestion.id) {
        this.questionService.deleteQuestion(this.selectedQuestion.id)
        .subscribe((res)=> {
          console.log(res) ;
          this.displayQuestion() ;
        });
      }
    }

}
