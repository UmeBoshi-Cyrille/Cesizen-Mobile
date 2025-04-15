import { Component } from '@angular/core';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AppNavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Cesizen-Mobile';
}
