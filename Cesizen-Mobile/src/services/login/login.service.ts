import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'common/environments/environment';
import { Credentials } from 'models/user/credentials';
import { UserDataStorage } from 'models/user/user-data-storage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<UserDataStorage> {
    return this.http.post<UserDataStorage>(`${this.apiUrl}/authentication/authenticate`,
      credentials).pipe(
      map(data => new UserDataStorage(
        data.id,
        data.username,
        data.createdAt,
        data.isActive,
        data.role
      )));;
  }
}
