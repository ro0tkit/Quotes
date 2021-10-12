import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../../quote';
@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {
@Output() onAddQuote= new EventEmitter()

text: string;
author: string;
name: string;

  constructor() { }

  ngOnInit(): void {
  }

onSubmit(){
  if(!this.text){
    alert('Please add a quote')
    return;
  }
  const newQuote = {
  text: this.text,
  author: this.author,
  name: this.name,
  };

  
this.onAddQuote.emit(newQuote);

  this.text = "";
  this.author = "";
  this.name = "";
}
}
