import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AccountService } from 'src/app/_services';

/**
 * Validiert ob auf eine Route zugegriffen werden darf.
 * @author Florian Weinert
 */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private accountService: AccountService
  ) {}

  /**
   * An jeder Roue kann eine Rolle definiert sein, welche erwartet wird. Wenn der Nutzer diese Rolle hat,
   * darf auf die Route zugegriffen werden
   * @param route
   * @param state
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.accountService.userValue;
    if (user) {
      const expectedRole: string = route.data["expectedRole"];
      return user.roles.map(role => role.name.toString()).includes(expectedRole);
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
