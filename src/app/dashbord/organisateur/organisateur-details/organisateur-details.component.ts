import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterRequestCOA } from 'src/app/auth/model/RegisterRequestCOA';
import { RegistrationCOAService } from 'src/app/auth/service/registration-coa.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-organisateur-details',
  templateUrl: './organisateur-details.component.html',
  styleUrls: ['./organisateur-details.component.css']
})
export class OrganisateurDetailsComponent {

  registerRequest: RegisterRequestCOA = {};

  constructor(private registrationService: RegistrationCOAService,private router: Router) { }


  registerOrganisateur() {
    this.registrationService.registerOrganisateur(this.registerRequest)
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
