// kebab-case.pipe.ts
import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'chf',
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number): string {
    return  `CHF ${value.toFixed(2)}`;
  }
}