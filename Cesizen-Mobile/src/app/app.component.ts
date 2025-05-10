import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from './core/services/auth/auth.service';
import { RefreshTokenService } from './core/services/login/refresh-token.service';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import { NavMobileComponent } from './components/partials/nav-mobile/nav-mobile.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    AppNavigationComponent,
    RouterOutlet,
    NavMobileComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Cesizen-Mobile';

  isMobileScreen = false;

  constructor(
    private authService: AuthService,
    private refreshTokenService: RefreshTokenService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointObserver.observe(['(max-width: 700px)']).subscribe(result => {
      this.isMobileScreen = result.matches;
    });
  }

  ngOnInit() {
    this.authService.checkLoginStatus();
    this.authService.loadUserData();
    this.refreshTokenService.setRefreshTokenTimer();
  }
}
