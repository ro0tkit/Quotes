import { Component, OnInit } from '@angular/core';
import {Quote} from "../../quote";
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    {id:1, name:"Programming isn't about what you know; it's about what you can figure out.",author:" - Chris Pine"},
    {id:2,name:"The best error message is the one that never shows up." ,author: "- Thomas Fuchs"},
    {id:3,name:"In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",author:" - Andrew Hunt"},
    {id:4,name:'Testing leads to failure, and failure leads to understanding.',author:"- Burt Rutan"},
    {id:5,name:'Talk is cheap. Show me the code.', author:"-Linus Torvalds"},
  ];

  constructor() { }

  ngOnInit(): void {
  }

deleteQuote(quote: Quote){
console.log(quote);
}

addQuote(quote: Quote){
console.log(quote);
}
}
