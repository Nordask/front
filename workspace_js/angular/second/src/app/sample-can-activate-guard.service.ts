import { Injectable, Inject } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthStatusService } from "./auth-status.service";

@Injectable()
export class SampleCanActivateGuardService implements CanActivate{

  constructor(@Inject(AuthStatusService) private s: AuthStatusService, @Inject(Router) private r: Router) { 
    console.log("SampleCanActivateGuardService");
  }

  canActivate() {
    console.log("SampleCanActivateGuardService.canActivate");
    if(this.s.isLoggedIn == true) {
      return true;
    } else {
      this.r.navigateByUrl("/login");
      return false;
    }
  }
}
