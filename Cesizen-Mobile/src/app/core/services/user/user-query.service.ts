import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { UserProfile } from '@models/user/user-profile';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class UserQueryService {
  private readonly apiUrlProfile = environment.userGetProfileUrl;

  getProfile(): Observable<UserProfile> {
    return from(CapacitorHttp.get({url: this.apiUrlProfile})
    ).pipe(
      map((response) => {
        // If your backend returns the profile directly:
        const data = response.data as UserProfile;
        return new UserProfile(
          data.firstname,
          data.lastname,
          data.username,
          data.email,
          new Date(data.createdAt)
        );
      }),
      catchError(error => throwError(() => error))
    );
  }
}
