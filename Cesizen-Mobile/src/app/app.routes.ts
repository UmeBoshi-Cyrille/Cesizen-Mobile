import { Routes } from '@angular/router';
import { InformationComponent } from './components/information/information.component';
import { ExerciseComponent } from './components/exercise/exercise.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'informations', component: InformationComponent },
      { path: 'exercises', component: ExerciseComponent },
      { path: 'about', component: AboutComponent },
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '404', component: ErrorComponent },
      { path: '**', redirectTo: "404" }
    ]
  },
  

];


