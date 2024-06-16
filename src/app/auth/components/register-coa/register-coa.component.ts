import { Component } from '@angular/core';
import { RegistrationCOAService } from '../../service/registration-coa.service';
import { Router } from '@angular/router';
import { RegisterRequestCOA } from '../../model/RegisterRequestCOA';

@Component({
  selector: 'app-register-coa',
  templateUrl: './register-coa.component.html',
  styleUrls: ['./register-coa.component.css']
})
export class RegisterCOAComponent {
  registerRequest: RegisterRequestCOA = {};

  constructor(private registrationService: RegistrationCOAService,private router: Router) { }


  registerUser() {
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

}
