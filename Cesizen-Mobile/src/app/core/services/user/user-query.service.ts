import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { catchError, map, Observable, throwError } from 'rxjs';
import { PaginationData } from '@models/pagination/pagination-data.interface';
import { UserDto } from '@models/user/user-dto';
import { User } from '@models/user/user';
import { UserProfile } from '@models/user/user-profile';

@Injectable({
  providedIn: 'root'
})
export class UserQueryService {
  private readonly apiUrlProfile = environment.userGetProfileUrl;

  constructor(private http: HttpClient) { }

  getProfile(): Observable<UserProfile> {
    return this.http.get<UserProfile>(this.apiUrlProfile, { withCredentials: true }).pipe(
      map((response) => new UserProfile(
        response.firstname,
        response.lastname,
        response.username,
        response.email,
        new Date(response.createdAt)
      )),
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
