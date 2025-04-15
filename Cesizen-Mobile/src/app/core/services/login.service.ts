import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(credentials: { identifier: string, password: string }): Observable<unknown> {
    return this.http.post(`${this.apiUrl}/authentication/authenticate`,
      credentials, {
      withCredentials: true
    });
  }
}
