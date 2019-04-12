import { Directive, Inject, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appSample]'
})
export class SampleDirective {
  @Input() firstImage: string;
  @Input() secondImage: string;

  constructor(@Inject(ElementRef) private currentElement: ElementRef) { 
    console.log("Sample Directive Invoked");
    console.log(currentElement);
  }

  ngOnChanges() {
    this.currentElement.nativeElement.setAttribute("src", this.firstImage);
  }

  @HostListener("mouseover")
  onmouseover() {
    this.currentElement.nativeElement.setAttribute("src", this.secondImage);  
  }

  @HostListener("mouseout")
  onmouseout() {
    this.currentElement.nativeElement.setAttribute("src", this.firstImage);  
  }
}
