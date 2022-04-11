import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})

export class VotesComponent implements OnInit {
  @Input() qts:Quotes;

  upVote(){
    this.qts.likes++;
    
  }
  
  downVote(){
    this.qts.dislikes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
