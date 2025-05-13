import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { UserDataStorage } from '@models/user/user-data-storage';
import { LoginData } from '@models/login/login-data';
import { environment } from '@environments/environment';
import { UserData } from '@models/user/user-data';
import { AuthenticationResponse } from '@models/login/authentication-response.interface';
import { AuthService } from '../auth/auth.service';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiUrlAuthenticate = environment.loginUrl;
  private readonly apiUrlRefreshAccessToken = environment.refreshAccessTokenUrl;
  private readonly apiUrlInvalidateToken = environment.invalidateTokensUrl;

  constructor(
    private authService: AuthService,
  ) { }

  authenticate(authenticationData: LoginData): Observable<AuthenticationResponse> {
    const url = this.apiUrlAuthenticate;

    return from(CapacitorHttp.post({url, data: authenticationData})).pipe(
      map(response => {
        const data = response.data as { user: UserData, isLoggedIn: boolean, tokenExpirationTime: number };
        return new AuthenticationResponse(
          new UserDataStorage(
            data.user.id,
            data.user.username,
            data.user.createdAt,
            data.user.isActive,
            data.user.role
          ),
          data.isLoggedIn,
          data.tokenExpirationTime
        );
      }),
      catchError(error => throwError(() => error))
    );
  }

  refreshToken(): Observable<AuthenticationResponse> {
    const url = this.apiUrlRefreshAccessToken;

    return from(CapacitorHttp.post({url, data: {}})).pipe(
      map(response => {
        const data = response.data as { user: UserData, isLoggedIn: boolean, tokenExpirationTime: number };
        return new AuthenticationResponse(
          new UserDataStorage(
            data.user.id,
            data.user.username,
            data.user.createdAt,
            data.user.isActive,
            data.user.role
          ),
          data.isLoggedIn,
          data.tokenExpirationTime
        );
      }),
      catchError(error => throwError(() => error))
    );
  }

  logout() {
    localStorage.removeItem('userData');
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('tokenExpirationTime');
    this.invalidateToken();
    this.authService.setLoggedOut();
    //window.location.href = '/login';
  }

  private invalidateToken(): Observable<unknown> {
    const url = this.apiUrlInvalidateToken;

    return from(CapacitorHttp.post({url, data: {}})).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }
}
