import { Component, Input, SimpleChanges, OnChanges, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnChanges{

  @Input() companyTitle: string;
  @Input() companyLocation: string;
  firstName: string = "First";
  lastName: string = "Second";

  constructor() {
    //console.log("constructor");
    this.companyTitle = "QQQ";
    this.companyLocation = "FF";
  }

  // only for first-one or single
  @ContentChild(EmployeeComponent) comp3: EmployeeComponent;
  @ContentChildren(EmployeeComponent) comp4: QueryList<EmployeeComponent>;

  ngOnChanges(changes: SimpleChanges) {
    /*
    console.log("ngOnChanges");
    console.log(changes);
    console.log(changes.companyTitle.currentValue);
    console.log(changes.companyLocation.currentValue);
    */
  }

  ngOnInit() {
    //console.log("ngOnInit");
  }

  ngDoCheck() {
    //console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    //console.log("ngAfterContentInit");
    console.log(this.comp3);
    console.log(this.comp4);
  }

  ngAfterContentChecked() {
    //console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    //console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    //console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    //console.log("ngOnDestroy");
  }

  onChangeData2Click() {
    /*
    this.comp3.empName = "new emp name";
    this.comp3.salary = 100000;
    */
    var arr = this.comp4.toArray();
    for(var i = 0; i < arr.length; i++) {
      arr[i].empName = "new emp name" + i;
      arr[i].salary = 100000 + i;
    }
  }
}
