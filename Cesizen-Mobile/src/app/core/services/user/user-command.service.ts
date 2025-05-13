import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { environment } from '@environments/environment';
import { catchError, from, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCommandService {
  private readonly apiUrlCommand = environment.userCommandUrl;
 
  updateUsername(username: string): Observable<unknown> {
    const url = `${this.apiUrlCommand}/update-username`;

    return from(CapacitorHttp.patch({
        url,
        data: JSON.stringify(username),
        headers: { 'Content-Type': 'application/json' }
    })
    ).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }

  updateEmail(email: string): Observable<unknown> {
    const url = `${this.apiUrlCommand}/update-email`;

    return from(CapacitorHttp.patch({
        url,
        data: JSON.stringify(email),
        headers: { 'Content-Type': 'application/json' }
      })
    ).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.apiUrlCommand}/${id}/delete`;

    return from(CapacitorHttp.delete({ url })).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }
}
