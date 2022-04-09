import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-new-quotes',
  templateUrl: './new-quotes.component.html',
  styleUrls: ['./new-quotes.component.css']
})
export class NewQuotesComponent implements OnInit {

  qts:Quotes[] = [
    {quote: 'It always seems impossible until it is done', name: 'Nelson Mandela', description: 'Posted by Wayne' },
    {quote: 'Be inspired before you expire', name:'Pepe Minambo', description: 'Posted by Wayne'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
