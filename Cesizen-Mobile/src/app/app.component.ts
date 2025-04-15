import { Component } from '@angular/core';
import { LoginComponent } from './features/login.component/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cesizen-Mobile';
}
