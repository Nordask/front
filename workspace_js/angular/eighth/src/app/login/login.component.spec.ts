import { LoginComponent } from "./login.component";
import { FormsModule } from "@angular/forms";
import { TestBed } from "@angular/core/testing";
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';

describe("Login Form Testing", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule],
      providers: []
    }).compileComponents();
  });
  
  it("Test Case 1", () => {
    var comp = TestBed.createComponent(LoginComponent).debugElement.componentInstance;
    comp.userName = "admin";
    comp.password = "manager";
    comp.onLoginClicked();
    expect(comp.message).toBe("Successful login");
  })

  it("Test Case 2", () => {
    var comp = TestBed.createComponent(LoginComponent).debugElement.componentInstance;
    comp.userName = "ff";
    comp.password = "qq";
    comp.onLoginClicked();
    expect(comp.message).toBe("Invalid login");
  })

  it("Test Case 3", () => {
    var a = 10;
    var b = 40;
    var c = a + b;
    expect(c).toBe(50);
  })  
})