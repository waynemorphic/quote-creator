import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-new-quotes',
  templateUrl: './new-quotes.component.html',
  styleUrls: ['./new-quotes.component.css']
})
export class NewQuotesComponent implements OnInit {

  qts:Quotes[] = [
    {quote: 'It always seems impossible until it is done', name: 'Nelson Mandela' },
    {quote: 'Be inspired before you expire', name:'Pepe Minambo'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
