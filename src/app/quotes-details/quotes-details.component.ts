import { Quotes } from '../quotes';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quotes-details',
  templateUrl: './quotes-details.component.html',
  styleUrls: ['./quotes-details.component.css']
})
export class QuotesDetailsComponent implements OnInit {

  @Input () qts:Quotes;
  constructor() { }

  ngOnInit(): void {
  }

}

// Here we are doing input proprty binding from 
// new-quotes parent component to quotes-details child component

//qts is the property that is undergoing input property binding, receiving
// data from new-quotes component