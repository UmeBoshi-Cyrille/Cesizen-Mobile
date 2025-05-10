import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { UserDataStorage } from '@models/user/user-data-storage';
import { LoginData } from '@models/login/login-data';
import { environment } from '@environments/environment';
import { UserData } from '@models/user/user-data';
import { AuthenticationResponse } from '@models/login/authentication-response.interface';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiUrlAuthenticate = environment.loginUrl;
  private readonly apiUrlRefreshAccessToken = environment.refreshAccessTokenUrl;
  private readonly apiUrlInvalidateToken = environment.invalidateTokensUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  authenticate(authenticationData: LoginData): Observable<AuthenticationResponse> {
    const result = this.http.post<{ user: UserData, isLoggedIn: boolean, tokenExpirationTime: number }>
      (this.apiUrlAuthenticate, authenticationData, { withCredentials: true }).pipe(
      map(data => new AuthenticationResponse(
        new UserDataStorage(
          data.user.id,
          data.user.username,
          data.user.createdAt,
          data.user.isActive,
          data.user.role
        ),
        data.isLoggedIn,
        data.tokenExpirationTime
      )),
      catchError((error: HttpErrorResponse) => {
          return throwError(() => error);
      })
    );

    return result;
  }

  refreshToken(): Observable<AuthenticationResponse> {
    const result = this.http.post<{ user: UserData, isLoggedIn: boolean, tokenExpirationTime: number }>
      (this.apiUrlRefreshAccessToken, {}, { withCredentials: true }).pipe(
        map(data => new AuthenticationResponse(
          new UserDataStorage(
            data.user.id,
            data.user.username,
            data.user.createdAt,
            data.user.isActive,
            data.user.role
          ),
          data.isLoggedIn,
          data.tokenExpirationTime
      )),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );

    return result;
  }

  logout() {
    localStorage.removeItem('userData');
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('tokenExpirationTime');
    this.invalidateToken();
    this.authService.setLoggedOut();
    //window.location.href = '/login';
  }

  private setParams(email: string, token: string): HttpParams {
    return new HttpParams()
      .set('token', token)
      .set('email', email);
  }

  private invalidateToken(): Observable<unknown> {

    return this.http.post(this.apiUrlInvalidateToken, { withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
