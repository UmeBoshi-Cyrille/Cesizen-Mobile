import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegistrationService } from '@services/registration/registration.service';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  passwordVisible = false;
  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
  registerForm = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(''),
  })
  constructor(
    private registrationService: RegistrationService,
  ) { }
  onSubmit() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      this.registrationService.registerUser(this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Registered successfully:', response);
          window.location.href = '/l';
        },
        error: (error) => {
          console.error('Error registration:', error);
        }
      });
    }
  }
}
