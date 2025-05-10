import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly apiUrlGetUrlImage = `${environment.imageDisplayUrl}/assets/img`;

  constructor(private http: HttpClient) { }

  getImageUrl(filename: string): string {
    return `${this.apiUrlGetUrlImage}/${filename}`;
  }

  checkImageExists(imagePath: string): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = imagePath;
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
    });
  }

  fetchAndProcessItems<T>(
    cdr: ChangeDetectorRef,
    fetchFn: () => Observable<T[]>,
    assignTo: (items: T[]) => void,
  ) {
    fetchFn().subscribe(items => {
      const processed = items.map(item => ({
        ...item,
        imageSrc: '/assets/default.jpg',
      }));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      processed.forEach((item: any, idx: number) => {
        if (item.imagePath) {
          const imagePath = `assets/${item.imagePath}`;
          this.checkImageExists(imagePath).then(exists => {
            processed[idx].imageSrc = exists ? imagePath : '/assets/default.jpg';
            cdr.detectChanges();
          });
        }
      });

      assignTo(processed);
    });
  }

  private handleError(error: HttpErrorResponse) {
    let msg = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      msg = `Error: ${error.error.message}`;
    } else if (error.status === 400) {
      msg = 'Invalid request or file.';
    } else if (error.status === 500) {
      msg = 'Server error during upload.';
    }
    return throwError(() => new Error(msg));
  }
}
