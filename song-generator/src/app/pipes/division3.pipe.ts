import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'division3',
})
export class Division3Pipe implements PipeTransform {
  transform(followers: string): unknown {
    return followers.toLocaleString();
  }
}
