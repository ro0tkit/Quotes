import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../../quote';
import { SharedServiceService } from "../../shared-service.service";
import { Subscription } from "rxjs";
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
date:string;
showAddQuote: boolean = false;
subscription: Subscription;

  constructor(private sharedService: SharedServiceService) { 
    this.subscription = this.sharedService
    .onToggle()
    .subscribe((value) => (this.showAddQuote = value));
  }

  ngOnInit(): void {
  }
  toggleForm(){
    this.showAddQuote = !this.showAddQuote;
   }
   onSubmit(){
    if(!this.statement){
      alert('Please Add a Quote!')
      return;
    }
  
  const newQuote = {
  statement: this.statement,
  author: this.author,
  name: this.name,
  date: this.date,
  };

  
this.onAddQuote.emit(newQuote);

  this.statement = "";
  this.author = "";
  this.name = "";
}
}
