import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-new-quotes',
  templateUrl: './new-quotes.component.html',
  styleUrls: ['./new-quotes.component.css']
})
export class NewQuotesComponent implements OnInit {

  

  qts:Quotes[] = [
    new Quotes('It always seems impossible until it is done', 'Nelson Mandela', 'Posted by Wayne', new Date(2022, 4, 7)),
    new Quotes('Be inspired before you expire', 'Pepe Minambo', 'Posted by Wayne', new Date (2022, 4, 1)),
  ];
  toggleQuoteDescription(index:any){
      this.qts[index].showDescription = !this.qts[index].showDescription;
    };
  
  quoteDone(isDone:any, index:any){ //we want to delete a quote if user prompts so
    if (isDone){
      this.qts.splice(index,1)
    };
  };

  addNewQuote(nQ: any) {
    let qtsArraySize = this.qts.length;
    nQ.id = qtsArraySize+1;
    nQ.completeDate = new Date(nQ.completeDate)
    this.qts.push(nQ)

    
    console.log(nQ.description)
    // console.log(nQ.name)
    
    
  }
    
  constructor() { }

  ngOnInit() {
  }
}

// qts is a property which is an array of type Quotes blueprint class

//new is a keyword for calling class Quotes and defining each quote

//toggleQuoteDescription is a function that binds an event so that the 
//parent and child components are able to communicate. in this case,
//they bind the event showDescription.

//quoteDone is a function that catches emitted events from the child
// component and parent Component. we pass isDone EventEmitter and index as the arguments