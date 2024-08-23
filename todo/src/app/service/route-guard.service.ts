import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
 
export const canActivateFn: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authService = inject(HardcodedAuthenticationService); //here we use canActivateFn and its definition
  const router = inject(Router);

  if (authService.isUserLoggedIn()) {  //check whether user is loggedin
    return true;
    
  }
  router.navigate(['login']);
  return false;
};
