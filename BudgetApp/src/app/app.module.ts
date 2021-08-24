import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetBoardComponent } from './budget-board/budget-board.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NoteThumbnailComponent } from './budget-note/note-thumbnail.component';
import { NotesService } from './note.service';
import { BudgetNoteDetailComponent } from './budget-note-detail/budget-note-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetBoardComponent,
    NavigationComponent,
    NoteThumbnailComponent,
    BudgetNoteDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
