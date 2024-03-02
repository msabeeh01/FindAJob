import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  if (typeof window !== 'undefined') {
    if (!window.localStorage.getItem('token')) {
      router.navigate(['/login']);
      return false;
    }
  }
  return true;
};
