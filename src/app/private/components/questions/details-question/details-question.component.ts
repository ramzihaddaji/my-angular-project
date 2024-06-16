import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/private/model/Question';

import { QuestionService } from 'src/app/private/service/question.service';
import { Field } from 'src/app/public/model/Field';

@Component({
  selector: 'app-details-question',
  templateUrl: './details-question.component.html',
  styleUrls: ['./details-question.component.css'],
})
export class DetailsQuestionComponent {
  question: Question = {};
  questionId: string | null = null;

  questionForm: FormGroup;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.questionForm = this.fb.group({
      nom: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.questionId = this.route.snapshot.paramMap.get('id');
    if (this.questionId != null && this.questionId != 'new') {
      this.displayQuestion(Number(this.questionId));
    }
  }

  displayQuestion(id: number) {
    this.questionService.getQuestionById(id).subscribe((res) => {
      this.question = res;
    });
  }

  deleteQuestion() {
    if (this.question.id) {
      this.questionService
        .deleteQuestion(this.question.id)
        .subscribe((res) => {
          console.log(res);
          this.router.navigate(['/question']); // Rediriger vers la liste des événements après la suppression
        });
    }
  }

  addQuestion() {
    this.questionService.addQuestion(this.question).subscribe((res) => {
      console.log(res);
    });
  }

  saveQuestion() {
    if (this.question?.id) {
      this.updateQuestion(this.question?.id);
    } else {
      this.addQuestion();
    }
  }

  updateQuestion(id: number) {
    if (this.questionId) {
      this.questionService
        .updateQuestion(id, this.question)
        .subscribe((res) => {
          console.log(res);
        });
    }
  }
}
