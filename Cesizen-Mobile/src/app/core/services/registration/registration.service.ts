import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { environment } from '@environments/environment';
import { RegistrationData } from '@models/login/registration-data.interface';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private registerUrl = environment.registrationUrl;

  registerUser(userData: RegistrationData): Observable<unknown> {
    const url = this.registerUrl;

    return from(CapacitorHttp.post({url, data: userData})).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }
}
