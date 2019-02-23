import { Component, OnInit } from '@angular/core';
import { SubscribeExampService } from 'src/app/services/subscribe-examp.service';

@Component({
  selector: 'app-subscribe-examp-child',
  templateUrl: './subscribe-examp-child.component.html',
  styleUrls: ['./subscribe-examp-child.component.scss']
})
export class SubscribeExampChildComponent implements OnInit {

  constructor(private subscribeExampService: SubscribeExampService) { }
  denemeText: string;
  ngOnInit() {

  }

  changeValue(event: any) {

    this.subscribeExampService.denemeText.emit(this.denemeText);
  }





}
