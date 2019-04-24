import { Component } from '@angular/core';
import { Observable, Observer } from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myObservable: Observable<string> = Observable.create((observer: Observer<string>) => {
    console.log("subscribed");
    observer.next("Hello");
    observer.next("Hello again");
    //observer.error("errom message");
    observer.complete();
    observer.next("Hello3");
  });

  ngOnInit() {
    this.myObservable.subscribe((data) => {console.log(data);},
                                (error) => {console.log(error);},
                                () => {console.log("Completed");});
    //this.myObservable.subscribe((data) => {console.log(data);});
  }
}
