import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: any): any {
    var hours = parseInt(String(value / 60));
    var minutes = value - (hours * 60);
    if (minutes == 0) {
      return hours + " hr";
    } else {
      return hours + " hr and " + minutes + " min";
    }
   }

}
