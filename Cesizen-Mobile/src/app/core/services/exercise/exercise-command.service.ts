import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, throwError } from 'rxjs';
import { NewExercise } from '@models/exercise/new-exercise';
import { environment } from '@environments/environment';
import { ExerciseDto } from '@models/exercise/exercise-dto';
import { CapacitorHttp } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseCommandService {
  private apiCreateUrl = environment.exerciseCreateUrl;
  private apiCommandUrl = environment.exerciseCommandUrl;

  create(exerciseData: NewExercise): Observable<unknown> {
    const url = this.apiCreateUrl;

    return from(CapacitorHttp.post({url, data: exerciseData })).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }

  update(id: number, exerciseData: ExerciseDto): Observable<unknown> {
    const url = `${this.apiCommandUrl}/${id}/update`;

    return from(CapacitorHttp.put({url,data: exerciseData})).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }

  delete(id: number): Observable<unknown> {
    const url = `${this.apiCommandUrl}/${id}/delete`;

    return from(CapacitorHttp.delete({ url })).pipe(
      map(response => response.data),
      catchError(error => throwError(() => error))
    );
  }
}
