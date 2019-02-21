import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SavingsGoalsComponent } from './components/savings-goals/savings-goals.component';

@NgModule({
  declarations: [
    AppComponent,
    SavingsGoalsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
