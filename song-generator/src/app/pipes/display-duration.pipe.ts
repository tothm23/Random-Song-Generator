import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayDuration',
})
export class DisplayDurationPipe implements PipeTransform {
  transform(milliseconds: number): string {
    let minuteNum = Math.floor(milliseconds / 60000);
    let minuteStr = Math.floor(milliseconds / 60000).toString();

    let secondNum = Math.floor((milliseconds % 60000) / 1000);
    let secondStr = Math.floor((milliseconds % 60000) / 1000).toString();

    if (minuteNum < 10) {
      minuteStr = '0' + minuteStr;
    }

    if (secondNum < 10) {
      secondStr = '0' + secondStr;
    }

    return `${minuteStr}:${secondStr}`;
  }
}
