import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/auth/model/RegisterRequest';
import { RegisterRequestCOA } from 'src/app/auth/model/RegisterRequestCOA';
import { RegistrationCOAService } from 'src/app/auth/service/registration-coa.service';
import { RegistrationService } from 'src/app/auth/service/registration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-collaborateur-details',
  templateUrl: './collaborateur-details.component.html',
  styleUrls: ['./collaborateur-details.component.css']
})
export class CollaborateurDetailsComponent {

  registerRequest: RegisterRequestCOA = {};

  constructor(private registrationService: RegistrationCOAService,private router: Router) { }


  registerCollaborateur() {
    this.registrationService.registerCollaborateur(this.registerRequest)
      .subscribe(
        response => {
          console.log('Registration Collaborateur successful:', response);
          Swal.fire({
            title: 'Registration Collaborateur successful !!',
            icon: 'success',
          })
          // Optionally, navigate to a success page or display a success message
        },
        error => {
          console.error('Registration failed:', error);
          // Handle registration failure, e.g., display error message
        }
      );
  }

}
