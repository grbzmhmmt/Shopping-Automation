import { Component } from '@angular/core';

declare var require: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Northwind Project';


  introStart(){
    const IntroJs=require('../../node_modules/intro.js/intro.js');
    let intro=IntroJs();

    intro.setOptions({
      steps:[
        {
          intro:'Welcome to Northwind Project',
          position:'bottom'
        },{
          element:'#intro1',
          intro:'Navbar and Your Cart Summary You can see hear your shopping cart',
          position:'left'
        },{
          element:'#intro2',
          intro:'You can see hear my different angular properties',
          position:'right'
        },{
          element:'#intro3',
          intro:'Hear is product categories',
          position:'right'
        },{
          element:'#intro4',
          intro:'Products Details You can see Products and their properties',
          position:'top'
        }
      ]
    });
    intro.start();
  }



}
