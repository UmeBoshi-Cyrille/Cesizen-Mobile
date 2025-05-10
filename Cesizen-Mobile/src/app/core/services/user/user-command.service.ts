import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCommandService {
  private readonly apiUrlCommand = environment.userCommandUrl;
 
  constructor(private http: HttpClient) { }

  updateUsername(username: string): Observable<unknown> {
    const url = `${this.apiUrlCommand}/update-username`;
    return this.http.patch(url, JSON.stringify(username), {
      headers: { 'Content-Type': 'application/json' }, withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }

  updateEmail(email: string): Observable<unknown> {
    const url = `${this.apiUrlCommand}/update-email`;
    return this.http.patch(url, JSON.stringify(email), { headers: { 'Content-Type': 'application/json' }, withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );;
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.apiUrlCommand}/${id}/delete`;
    return this.http.delete(url, { withCredentials: true }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );;
  }
}
