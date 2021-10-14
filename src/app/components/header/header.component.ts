import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from "../../shared-service.service";
import { Subscription } from "rxjs";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'DAILY QUOTES';
  showAddQuote: boolean = true;
  subscription: Subscription;

  constructor(private sharedService: SharedServiceService) { 
    this.subscription = this.sharedService
    .onToggle()
    .subscribe((value) => (this.showAddQuote = value));
  }

  ngOnInit(): void {
  }
  toggleAddQuote(){
   this.sharedService.toggleAddQuote();
  }
}
