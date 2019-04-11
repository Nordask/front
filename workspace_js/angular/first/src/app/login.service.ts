import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  public checkUserNameAndPassword(email: string, password: string) {
    var u = JSON.parse(localStorage.users);

    for(var i = 0; i < u.length; i++) {
      if(u[i].email == email && u[i].password == password) {
        return true;
      }  
    }

    return false;
  }
}
