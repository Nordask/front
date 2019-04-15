import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface MyInterface {
  canLeave: boolean;
}

@Injectable()
export class SampleCanDeactiveGuardService implements CanDeactivate<MyInterface>{

  constructor() {
    console.log("SampleCanDeactiveGuardService");
  }

  canDeactivate(component): boolean {
    console.log("canDeactivate");
    if(component.canLeave == true) {
      return true;
    } else if(confirm("Are you sure to delete this changes?")) {
      return true; // can leave component
    } else {
      return false; // can't leave component
    } 
  }
}
