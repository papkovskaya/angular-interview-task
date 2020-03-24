import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'caseInverter'
})
export class CaseInverterPipe implements PipeTransform {

  invertString(str: string) {
    return str.split('')
              .map(char => char === char.toUpperCase()
                ? char.toLowerCase()
                : char.toUpperCase())
              .join('');
};


  transform(value: string, ...args: unknown[]): string {
    return this.invertString(value);
  }

}
