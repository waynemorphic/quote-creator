import { Quotes } from '../quotes';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input () qts:Quotes;
  @Output () isDone = new EventEmitter<boolean>();

  quoteDone(done:boolean){
    this.isDone.emit(done)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
//@Input
// Here we are doing input proprty binding from 
// new-quotes parent component to quotes-details child component 

//qts is the property that is undergoing input property binding, receiving
// data from new-quotes component

//@Output
//imported output decorator and EventEmitter class
//isDone is defined as an EventEmitter that takes a boolean
//quoteDone function calls the emit method on isDone. This
// passes this event to the parent component which is the 
// new-quotes component. We define this emitted event (isDone) in the parent html