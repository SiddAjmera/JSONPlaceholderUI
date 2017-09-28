import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendor'
})
export class AppendorPipe implements PipeTransform {

  transform(input: string, textToAppend: string, whereToAppend: string): string {
    return whereToAppend === 'pre' ? textToAppend + input : input + textToAppend;
  }

}
