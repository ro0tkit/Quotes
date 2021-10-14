import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../../quote';
@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit { 
@Output() onAddQuote: EventEmitter<Quote> = new EventEmitter()


statement: string;
author: string; 
name: string;
showAddQuote: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
  toggleForm(){
    this.showAddQuote = !this.showAddQuote;
   }
onSubmit(){
  if(!this.statement){
    alert('Please add a quote!')
    return;
  }
  
  const newQuote = {
  statement: this.statement,
  author: this.author,
  name: this.name,
  };

  
this.onAddQuote.emit(newQuote);

  this.statement = "";
  this.author = "";
  this.name = "";
}
}
