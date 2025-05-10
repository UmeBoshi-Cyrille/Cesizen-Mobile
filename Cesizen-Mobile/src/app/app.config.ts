import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { errorInterceptor } from './core/interceptors/error.interceptor';
import { successInterceptor } from './core/interceptors/success-interceptor';
import { PaginatorCustomService } from './core/services/pagination-services/paginator-custom.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideHttpClient(withInterceptors([errorInterceptor, successInterceptor])),
    provideAnimationsAsync(),
    { provide: MatPaginatorIntl, useClass: PaginatorCustomService }
  ],
};
