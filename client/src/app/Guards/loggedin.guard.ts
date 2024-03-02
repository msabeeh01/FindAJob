import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loggedinGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  // redirect to home if token exists
  if (typeof window !== 'undefined') {
    if (window.localStorage.getItem('token')) {
      return router.navigate(['/home']);
    }
  }
  return true;
};
