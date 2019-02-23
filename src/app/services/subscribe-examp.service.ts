import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeExampService {

  constructor() { }

  @Output() denemeText:EventEmitter<string>=new EventEmitter();

}
