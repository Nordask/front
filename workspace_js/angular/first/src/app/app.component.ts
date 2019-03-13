import { Component } from '@angular/core';

@Component({
  selector: 'start_component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'God is laughing!'; // Interpolation Binding  template <-- component
  path: string = "assets/cat_raven.jpg"; // Property Binding    template <-- component
  username: string = "Nameless"; // two way data binding        template <--> component
  login() {
    console.log("login called");
    console.log(this.username);
  }
}
