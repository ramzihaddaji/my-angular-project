import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  contactForm: FormGroup;
  isSubmitting: boolean = false;
  isFormSubmitted: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Simulate sending the form data
      setTimeout(() => {
        this.isSubmitting = false;
        this.isFormSubmitted = true;
        this.contactForm.reset();
      }, 2000);
    }
  }

}
