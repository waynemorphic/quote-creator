import { Component } from '@angular/core';
import { Quotes } from './quotes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quotes[] = [
    {quote: 'It always seems impossible until it is done', name: 'Nelson Mandela' },
    {quote: 'Be inspired before you expire', name:'Pepe Minambo'}
  ];
}

//imported the Quotes blue print class
//quotes is an object attributed to the Quotes class