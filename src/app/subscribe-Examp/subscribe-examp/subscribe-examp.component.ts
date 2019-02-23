import { Component, OnInit } from '@angular/core';
import { SubscribeExampService } from 'src/app/services/subscribe-examp.service';

@Component({
  selector: 'app-subscribe-examp',
  templateUrl: './subscribe-examp.component.html',
  styleUrls: ['./subscribe-examp.component.scss']
})
export class SubscribeExampComponent implements OnInit {

  constructor(private subscribeExampService: SubscribeExampService) { }
  denemeText: string;
  ngOnInit() {
    this.subscribeExampService.denemeText.subscribe(value => {
      this.denemeText = value;
    });
  }

}
