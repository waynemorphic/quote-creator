import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quotes ("", "", "", new Date (), 0, 0); //here we are creating a new Quote as defined in the blueprint class
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote (){
    this.addQuote.emit(this.newQuote);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}

//imported Quotes blueprint class