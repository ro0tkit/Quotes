import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../../quote';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
@Input() quote: Quote;
@Output() onDeleteQuote = new EventEmitter<boolean>();

faTrashAlt = faTrashAlt;
faArrowUp = faArrowUp;
faArrowDown = faArrowDown;
numberOfLikes: number = 0;
numberOfDislikes: number = 0;

  constructor() { }

  ngOnInit(): void {
  }
onDelete(deleteQuote: boolean){
this.onDeleteQuote.emit(deleteQuote);
}
upVoteClick(){
  this.numberOfLikes++;
}
downVoteClick(){
  this.numberOfDislikes++;
}
}
