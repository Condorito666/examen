import { AuthenticationService } from './../services/auth.service';
import { Injectable, inject } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

export const AutoLoginGuard = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  return authService.isAuthenticated.pipe(
    filter((val) => val !== null), // Filter out initial Behaviour subject value
    take(1), // Otherwise the Observable doesn't complete!
    map((isAuthenticated) => {
      if (isAuthenticated) {
        router.navigateByUrl('/tabs', { replaceUrl: true });
        console.log('Found previous token, automatic login');
        return false;
      } else {
        return true;
      }
    })
  );
};
