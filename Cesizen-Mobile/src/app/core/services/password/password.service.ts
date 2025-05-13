import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { ResetPassword } from '@models/password/reset-password.interface';
import { ResetForgottenPassword } from '@models/password/reset-forgotten-password.interface';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  private readonly apiUrlForgetPassword = environment.forgetPasswordUrl;
  private readonly apiUrlForgetPasswordResponse = environment.forgetPasswordresponseUrl;
  private readonly apiUrlResetPassword = environment.resetPasswordUrl;
  private readonly apiUrlResetForgottenPassword = environment.resetForgottenPasswordUrl;

  forgetPassword(email: string): Observable<unknown> {
    const url = this.apiUrlForgetPassword;

    return from(CapacitorHttp.post({url, data: { email }})).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forgetPasswordResponse(email: string, token: string): Observable<any> {
    const url = this.apiUrlForgetPasswordResponse;
    const params = { email, token };

    return from(
      CapacitorHttp.post({url, params, data: null})).pipe(
      map(response => response),
      catchError(error => throwError(() => error))
    );
  }

  resetForgottenPassword(email: string, resetPasswordData: ResetForgottenPassword): Observable<unknown> {
    const url = this.apiUrlResetForgottenPassword;
    const params = { email };

    return from(
      CapacitorHttp.post({url, params, data: resetPasswordData})).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }

  resetPassword(resetPasswordData: ResetPassword): Observable<unknown> {
    const url = this.apiUrlResetPassword;
    return from(
      CapacitorHttp.post({url, data: resetPasswordData})).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }
}
