import { Pipe, PipeTransform } from '@angular/core';
import { format, isValid, parseISO } from 'date-fns';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {
  transform(value: string | Date, dateFormat: string = 'dd-MM-yyyy'): string {
    if (!value) return '';
    const date = typeof value === 'string' ? parseISO(value) : value;
    if (!isValid(date)) return '';
    return format(date, dateFormat);
  }
}