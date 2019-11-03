import { Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';

@Pipe({
  name: 'pipeFecha'
})
export class PipeFechaPipe implements PipeTransform {

  transform(value: string): string {
    return formatDate(value, 'short' , 'en-US', '-3000')
    
  }

}
