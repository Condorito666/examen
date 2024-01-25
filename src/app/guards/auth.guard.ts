import { AuthenticationService } from './../services/auth.service';
import { Injectable, inject } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';

export const AuthGuard = () => {
  const authService = inject(AuthenticationService);
  const router = inject(Router);

  return authService.isAuthenticated.pipe(
    filter((val) => val !== null), // Filter out initial Behaviour subject value
    take(1), // Otherwise the Observable doesn't complete!
    tap((isAuthenticated) => {
      if (isAuthenticated) {
        return true;
      } else {
        router.navigateByUrl('/login');
        return false;
      }
    })
  );
};

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanLoad {
//   constructor(
//     private authService: (AuthenticationService),
//     private router: Router
//   ) {}

//   canLoad(): Observable<boolean> {
//     return this.authService.isAuthenticated.pipe(
//       filter((val) => val !== null), // Filter out initial Behaviour subject value
//       take(1), // Otherwise the Observable doesn't complete!
//       map((isAuthenticated) => {
//         if (isAuthenticated) {
//           return true;
//         } else {
//           this.router.navigateByUrl('/login');
//           return false;
//         }
//       })
//     );
//   }
// }
