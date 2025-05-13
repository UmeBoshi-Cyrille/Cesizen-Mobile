import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly apiUrlVerifyEmail = environment.verifyEmailUrl;
  private readonly apiUrlResendEmailVerification = environment.resendEmailVerificationUrl;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  verifyEmail(email: string, token: string): Observable<any> {
    const url = this.apiUrlVerifyEmail;
    const params = {
      email: email,
      token: token
    };

    return from(CapacitorHttp.post({url,params,data: null})).pipe(
      map(response => response), 
      catchError((error) => throwError(() => error))
    );
  }

  resendVerifyEmail(email: string, token: string): Observable<unknown> {
    const url = this.apiUrlResendEmailVerification;
    const params = {
      email: email,
      token: token
    };

    return from(CapacitorHttp.post({ url, params })).pipe(
      map(response => response),
      catchError((error) => throwError(() => error))
    );
  }
}
