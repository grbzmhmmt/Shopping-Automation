import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, args?: number): number {
    var vatPersentage:number=18;
    if(args){
      vatPersentage=args[0];
    }

    return value+(value/100*vatPersentage);
  }

}
