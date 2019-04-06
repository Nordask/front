import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';

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
    console.log("constructor");
    this.companyTitle = "QQQ";
    this.companyLocation = "FF";
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges");
    console.log(changes);
    console.log(changes.companyTitle.currentValue);
    console.log(changes.companyLocation.currentValue);
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngDoCheck() {
    console.log("ngDoCheck");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
  }
}
