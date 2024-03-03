import { HttpInterceptorFn } from '@angular/common/http';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {
  //add token to header if exists
  if(typeof window === 'undefined') return next(req);
  const token = window.localStorage.getItem('token');
  if (token) {
    req = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + JSON.parse(token))
    })
    return next(req);
  }

  return next(req);
};
