import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-new-quotes',
  templateUrl: './new-quotes.component.html',
  styleUrls: ['./new-quotes.component.css']
})
export class NewQuotesComponent implements OnInit {

  

  qts:Quotes[] = [
    new Quotes('It always seems impossible until it is done', 'Nelson Mandela', 'Posted by Wayne'),
    new Quotes('Be inspired before you expire', 'Pepe Minambo', 'Posted by Wayne'),
  ];
  toggleQuoteDescription(index:any){
      this.qts[index].showDescription = !this.qts[index].showDescription;
    }

  constructor() { }

  ngOnInit() {
  }
}

// qts is a property which is an array of type Quotes blueprint class

//new is a keyword for calling class Quotes and defining each quote