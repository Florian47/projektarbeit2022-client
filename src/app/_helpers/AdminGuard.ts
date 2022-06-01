/*
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {AccountService} from "../_services";

/!**
 * Validiert ob auf eine Route zugegriffen werden darf.
 * @author David Wiebe
 *!/
@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate{
  constructor(
    private accountService: AccountService,
  ) {
  }
  canActivate(route: ActivatedRouteSnapshot):boolean {
    const expectedRole = route.data["expectedRole"];
    const user = this.accountService.userValue;
    const realRole = [];
    for(var i = 0; i < user.roles.length; i++){
      realRole.push(user.roles[i].name);
    }
    if(expectedRole.toString().indexOf(realRole.toString()) !=-1){
      return true
    }
    alert("Sie sind nicht als Admin eingeloggt")
    return false;
  }

}
*/
