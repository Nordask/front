import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";

var myAnimations = [
  trigger(
    "animation1", [
      state("state1", style({"background-color": "blue", "transform": "rotate(0deg) scale(1)"})),
      state("state2", style({"background-color": "green", "transform": "rotate(45deg) scale(1.4)"})),
      state("state3", style({"background-color": "green", "transform": "rotate(100deg) scale(0.6)"})),
      //transition("state1 => state2", animate("3000ms")),
      //transition("state2 => state1", animate("1000ms")),
      transition("* => *", animate("1000ms"))
    ]
  )
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [myAnimations]
})
export class AppComponent {
  currentState: string = "state1";
  
  onButton1Clicked() {
    this.currentState = "state1";
  }

  onButton2Clicked() {
    this.currentState = "state2";
  }

  onButton3Clicked() {
    this.currentState = "state3";
  }
}
