import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { QuoteComponent } from './components/quote/quote.component';
import { QuoteItemComponent } from './components/quote-item/quote-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddQuoteComponent } from './components/add-quote/add-quote.component';
import { FormsModule } from '@angular/forms';
import { CustomStyleDirectiveDirective } from './custom-style-directive.directive';
import { DateCountPipe } from './date-count.pipe'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    QuoteComponent,
    QuoteItemComponent,
    AddQuoteComponent,
    CustomStyleDirectiveDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }
