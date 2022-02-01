import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toMinusValue'
})
export class ToMinusValuePipe implements PipeTransform {

  transform(counter: number): unknown {
    return counter - 1;
  }

}
