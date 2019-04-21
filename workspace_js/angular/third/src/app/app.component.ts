import { Component, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Employee } from "./employee";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees: Employee[];
  newEmp: Employee = new Employee();
  n: number = 0;

  constructor(@Inject(HttpClient) private http: HttpClient) {

  }

  onSendRequestClicked() {
    this.http.get<Employee>("/SampleServlet", {responseType:"json"}).subscribe(this.getSuccess, this.getFail);
  }

  getSuccess = (response) => {
    console.log("success");
    this.employees = response;
  }

  getFail = () => {
    console.log("error");
  }

  onEditClicked() {

  }

  onInsertClicked() {
    this.http.post("/SampleServlet", this.newEmp, {responseType:"text"}).subscribe(this.postSuccess, this.postFail)
  }

  postSuccess = (response) => {
    console.log(response);
    var emp2: Employee = new Employee();
    emp2.empId = this.newEmp.empId;
    emp2.empName = this.newEmp.empName;
    emp2.salary = this.newEmp.salary;
    this.employees.push(emp2);
    this.newEmp.empId = null;
    this.newEmp.empName = null;
    this.newEmp.salary = null;
  }

  postFail = () => {
    console.log("Post error");
  }

  onDeleteClicked(n) {
    this.n = n;
    if(confirm("Are you sure to delete?")) {
      var eId = this.employees[n].empId;
      this.http.delete("/SampleServlet?empId=" + eId, {responseType: "text"}).subscribe(this.deleteSuccess, this.deleteFail);
    }
  }

  deleteSuccess = (response) => {
    console.log(response);
    alert("Successfully Deleted");
    this.employees.splice(this.n, 1);
  }

  deleteFail = () => {
    console.log("Delete error")
  }
}
