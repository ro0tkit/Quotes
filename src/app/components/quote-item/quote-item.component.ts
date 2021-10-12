import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Quote } from '../../quote';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-quote-item',
  templateUrl: './quote-item.component.html',
  styleUrls: ['./quote-item.component.css']
})
export class QuoteItemComponent implements OnInit {
@Input() quote: Quote;
@Output() onDeleteQuote = new EventEmitter();
faTrashAlt = faTrashAlt;
  constructor() { }

  ngOnInit(): void {
  }
onDelete(quote){
this.onDeleteQuote.emit(quote);
}
}
