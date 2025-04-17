import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Credentials } from '../../core/models/user/credentials';
import { LoginService } from '../../core/services/login/login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  loginForm = new FormGroup({
    identifier: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginService) { }

  onSubmit() {
    const credentials: Credentials = {
      identifier: this.loginForm.value.identifier ?? '',
      password: this.loginForm.value.password ?? '',
    };
    if (this.loginForm.valid) {
      this.loginService.login(credentials).subscribe({
        next: response => {
          if (isResponse(response)) {
            try {
              localStorage.setItem('userData', JSON.stringify(response));
            } catch (e) {
              console.log('Error saving to localStorage:', e);
            }
          }

          // Redirect to homepage
          window.location.href = '/';
        },
        error: (error) => {
          console.error('Error connexion:', error);
        }
      });
    }
    console.log('ConnexionFormComponent initialized.');
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isResponse(response: any): response is {
  id: number;
  username: string;
  createdAt: Date | string;
  isActive: boolean;
  role: string;
} {
  return response &&
    typeof response === 'object' &&
    'id' in response &&
    'username' in response &&
    'createdAt' in response &&
    'isActive' in response &&
    'role' in response;
}
