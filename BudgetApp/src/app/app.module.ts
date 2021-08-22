import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetBoardComponent } from './budget-board/budget-board.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BudgetNoteComponent } from './budget-note/budget-note.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetBoardComponent,
    NavigationComponent,
    BudgetNoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
