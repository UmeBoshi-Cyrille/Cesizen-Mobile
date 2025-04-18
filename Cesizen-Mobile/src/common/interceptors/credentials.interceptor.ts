import { HttpInterceptorFn } from '@angular/common/http';

export const credentialsInterceptor: HttpInterceptorFn = (req, next) => {
  switch (true) {
    case req.url.includes('/authenticate'):
      return next(req);
    default: 
      return next(req.clone({ withCredentials: true }));
  };
};
