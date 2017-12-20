import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, propertyName): any {
    if (value.length > 0) {
      const sortedData = value.sort((a, b) =>  this.compareData(a, b, propertyName) );
      return sortedData;
    } else { return value; }
  }

  compareData(a: any, b: any, propertyName: string) {
    const strA: string = a[propertyName].toUpperCase();
    const strB: string = b[propertyName].toUpperCase();

    if (strA < strB) {
      return -1;
    }
    if (strA > strB) {
      return 1;
    }
    return 0;
  }

}
