import { Routes } from "@angular/router";
import { AboutComponent } from "@pages/about/about.component";
import { DashboardComponent } from "@pages/dashboard/dashboard.component";
import { ErrorComponent } from "@pages/error/error.component";
import { ExerciseComponent } from "@pages/exercise/exercise.component";
import { HomeComponent } from "@pages/home/home.component";
import { InformationComponent } from "@pages/information/information.component";
import { LoginComponent } from "@pages/login/login.component";


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


