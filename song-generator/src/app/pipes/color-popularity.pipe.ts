import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorPopularity',
})
export class ColorPopularityPipe implements PipeTransform {
  transform(popularity: number): string {
    const red = Math.round(255 - (popularity / 100) * 255);
    const green = Math.round((popularity / 100) * 255);
    return `rgb(${red},${green},0)`;
  }
}
