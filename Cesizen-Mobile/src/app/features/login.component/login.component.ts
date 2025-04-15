import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../core/services/login.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

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
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    identifier: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(private login: LoginService) { }
  ngOnInit() { }

  onSubmit() {
    this.login.login(this.loginForm.value as {
      identifier: string, password: string
    }).subscribe(() => { console.log("success") })
  }
}
