import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { Exercise } from '@models/exercise/exercise';
import { environment } from '@environments/environment';
import { ExerciseDto } from '@models/exercise/exercise-dto';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseQueryService {
  private apiUrlIndex = environment.exerciseIndexUrl;
  private apiUrlDetails = environment.exercisesQueryUrl;
 
  getExercises(): Observable<ExerciseDto[]> {
    const url = this.apiUrlIndex;

    return from(CapacitorHttp.get({url})).pipe(
      map(response => response.data.value as ExerciseDto[]),
      catchError(error => throwError(() => error))
    );
  }

  getExercise(id: number): Observable<Exercise> {
    const url = `${this.apiUrlDetails}/${id}/details`

    return from(CapacitorHttp.get({ url })).pipe(
      map(response => response.data.value as Exercise),
      catchError(error => throwError(() => error))
    );
  }
}
