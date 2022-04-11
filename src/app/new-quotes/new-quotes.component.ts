import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-new-quotes',
  templateUrl: './new-quotes.component.html',
  styleUrls: ['./new-quotes.component.css']
})


export class NewQuotesComponent implements OnInit {
  
  qts:Quotes[] = [
    new Quotes('It always seems impossible until it is done', 'Nelson Mandela', ' Wayne', new Date(2021, 12, 7),0,0),
    new Quotes('Be inspired before you expire', 'Pepe Minambo', 'Winnie', new Date (2022, 3, 2),0,0)
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
    let qtsLength = this.qts.length;
    nQ.id = qtsLength+1;
    nQ.completeDate = new Date(nQ.completeDate)
    this.qts.push(nQ)

    
    console.log(nQ.description)
    // console.log(nQ.name)
     
  }

  get sortQuotes() {
    return this.qts.sort((x , y) => {
      return <any>new Date(y.completeDate) - <any>new Date(x.completeDate);
    });
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