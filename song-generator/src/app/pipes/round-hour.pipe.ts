import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundHour',
})
export class RoundHourPipe implements PipeTransform {
  transform(milliseconds: number): number {
    return Math.floor(milliseconds / 3600000);
  }
}
