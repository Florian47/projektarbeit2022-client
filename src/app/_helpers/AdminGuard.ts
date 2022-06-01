import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {AccountService} from "../_services";
import {Role, RoleType, User} from "../_models";

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate{
  aktuellerBenutzer : User;
  constructor(
    private accountService: AccountService,
  ) {
    this.aktuellerBenutzer = accountService.userValue;
  }
  canActivate(route: ActivatedRouteSnapshot):boolean {
    return true;
  }

}
