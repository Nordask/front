import { Component} from '@angular/core';
import { MyInterface } from '../sample-can-deactive-guard.service'

@Component({
  selector: 'app-savings-account',
  templateUrl: './savings-account.component.html',
  styleUrls: ['./savings-account.component.css']
})
export class SavingsAccountComponent implements MyInterface{
  accountNumber: string;
  currentBalance: number;
  canLeave: boolean = true;

  onAccountNoChanged() {
    if(this.accountNumber == "" && String(this.currentBalance) == "") {
      this.canLeave = true;
    } else {
      this.canLeave = false; 
    }  
  }

  onCurrentBalanceChanged() {
    if(this.accountNumber == "" && String(this.currentBalance) == "") {
      this.canLeave = true;
    } else {
      this.canLeave = false; 
    } 
  }
}
