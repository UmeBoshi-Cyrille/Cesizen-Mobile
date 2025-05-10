import { Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ArticleComponent } from "./components/article/article.component";
import { ArticlesComponent } from "./components/articles/articles.component";
import { ByCategoryComponent } from "./components/by-category/by-category.component";
import { Error404Component } from "./components/error/error-404.component";
import { ExerciseFormComponent } from "./components/exercise-form/exercise-form.component";
import { ExerciseComponent } from "./components/exercise/exercise.component";
import { ExercisesComponent } from "./components/exercises/exercises.component";
import { LoginComponent } from "./components/login/login.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { authGuard } from "./core/services/auth/auth.guard";
import { EmailVerificationComponent } from "./components/email-verification/email-verification.component";
import { EmailVerifiedComponent } from "./components/email-verified/email-verified.component";
import { ForgetPasswordResponseComponent } from "./components/partials/forget-password-response/forget-password-response.component";
import { ForgetPasswordComponent } from "./components/partials/forget-password/forget-password.component";
import { RegistrationComponent } from "./components/register/register.component";
import { ResetForgottenPasswordComponent } from "./components/reset-forgotten-password/reset-forgotten-password.component";
import { ResetPasswordComponent } from "./components/reset-passord/reset-password.component";

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ArticlesComponent },
      { path: 'login', component: LoginComponent },
      { path: 'articles/:id', component: ArticleComponent },
      { path: 'articles/category/:id', component: ByCategoryComponent },
      { path: 'exercises/:id', component: ExerciseComponent, canActivate: [authGuard], data: { roles: ['User', 'Admin'] } },
      { path: 'exercises', component: ExercisesComponent, canActivate: [authGuard], data: { roles: ['User', 'Admin'] } },
      { path: 'exercise-form', component: ExerciseFormComponent, canActivate: [authGuard], data: { roles: ['User', 'Admin'] } },
      { path: 'about', component: AboutComponent },
      { path: 'profile/:id', component: ProfileComponent, canActivate: [authGuard], data: { roles: ['User', 'Admin'] } },

      { path: 'inscription', component: RegistrationComponent },
      { path: 'se-connecter', component: LoginComponent },
      { path: 'forget-password', component: ForgetPasswordComponent },
      { path: 'forget-password-response/verify', component: ForgetPasswordResponseComponent },
      { path: 'reset-forgotten-password', component: ResetForgottenPasswordComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: 'verify-email/verify', component: EmailVerifiedComponent },
      { path: 'email-verification', component: EmailVerificationComponent },

      { path: '**', component: Error404Component },
    ]
  },
  

];


