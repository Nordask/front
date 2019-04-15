import { Injectable, Inject } from '@angular/core';
import { AuthStatusService } from './auth-status.service';
import { CanActivateChild, Router } from '@angular/router';

@Injectable()
export class SampleCanActivateChildGuardService implements CanActivateChild{

  constructor(@Inject(AuthStatusService) private s: AuthStatusService, @Inject(Router) private r: Router) {

  }

  canActivateChild() {
    console.log("SampleCanActivateChildGuardService.canActivateChild");

    if(this.s.isLoggedIn == true) {
      return true;
    } else {
      this.r.navigateByUrl("/login");
      return false;
    }
  }
}
