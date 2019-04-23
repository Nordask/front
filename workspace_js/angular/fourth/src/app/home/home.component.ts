import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, interval, range, from, fromEvent, Subscription } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  mySubscription: Subscription;
  firstName: string;
  constructor() {

  }

  ngOnInit() {
    //this.mySubscription = interval(1000).subscribe((n) => {console.log(n);})
    //this.mySubscription = range(100,50).subscribe((n) => {console.log(n);})
    //this.mySubscription = from([10, 20, 60,100])
    this.mySubscription = fromEvent(document.getElementById("txt1"), "keyup").subscribe
                          ((data) => {console.log(data);},
                          () => {},
                          () => {console.log("Finished");});
                                                                    
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();  
  }

}
