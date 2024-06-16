import { Component } from '@angular/core';
import { RegisterRequest } from '../../model/RegisterRequest';
import { RegistrationService } from '../../service/registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registerRequest: RegisterRequest = {};
  nameInvalid: boolean = false;
  prenomInvalid: boolean = false;
  ncinInvalid: boolean = false;
  dateNaissInvalid: boolean = false;
  emailInvalid: boolean = false;
  passwordInvalid: boolean = false;

  constructor(private registrationService: RegistrationService, private router: Router) { }

  registerUser() {
    if (!this.registerRequest.nom) {
      this.nameInvalid = true;
      return;
    }
    if (!this.registerRequest.prenom) {
      this.prenomInvalid = true;
      return;
    }
    if (!this.registerRequest.ncin || !this.validateNCIN(this.registerRequest.ncin)) {
      this.ncinInvalid = true;
      return;
    }
    if (!this.registerRequest.date_naiss ) {
      this.dateNaissInvalid = true;
      return;
    }
    if (!this.registerRequest.email) {
      this.emailInvalid = true;
      return;
    }
    if (!this.registerRequest.password) {
      this.passwordInvalid = true;
      return;
    }

    this.registrationService.registerUser(this.registerRequest)
      .subscribe(
        response => {
          console.log('Registration successful:', response);
          this.router.navigateByUrl('/login');
          // Optionally, navigate to a success page or display a success message
        },
        error => {
          console.error('Registration failed:', error);
          // Handle registration failure, e.g., display error message
        }
      );
  }

  validateNCIN(ncin: number): boolean {
    const ncinStr = ncin.toString();
    return ncinStr.length === 8 && !isNaN(ncin);
  }





}
