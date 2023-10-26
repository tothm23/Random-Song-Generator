import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundMinute',
})
export class RoundMinutePipe implements PipeTransform {
  transform(milliseconds: number): number {
    return Math.floor((milliseconds % 3600000) / 60000);
  }
}
