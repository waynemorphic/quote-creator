import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewQuotesComponent } from './new-quotes/new-quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { DateCountPipe } from './date-count.pipe';
import { VotesComponent } from './votes/votes.component';

@NgModule({
  declarations: [
    AppComponent,
    NewQuotesComponent,
    QuotesDetailsComponent,
    QuotesFormComponent,
    DateCountPipe,
    VotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //added form module after importing it since it is not available in the angular app by default
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
