import { Component, OnInit } from '@angular/core';
import {Quote} from "../../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    { statement:"Programming isn't about what you know; it's about what you can figure out.",author:" - Chris Pine",name:'Published by John Doe',date:""},
    { statement:"The best error message is the one that never shows up." ,author: "- Thomas Fuchs",name:'Published by John Doe',date:""},
    { statement:"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",author:" - Andrew Hunt",name:'Published by John Doe',date:""},
    { statement:'Testing leads to failure, and failure leads to understanding.',author:"- Burt Rutan",name:'Published by John Doe',date:""},
    { statement:'Talk is cheap. Show me the code.', author:"-Linus Torvalds",name:'Published by John Doe',date:""},
  ];

  constructor() { }

  ngOnInit(): void {
  }

deleteQuote(onDeleteQuote, index){
if(onDeleteQuote){
this.quotes.splice(index,1);
}
}

addQuote(quote: Quote){
this.quotes.push(quote)
}
}
