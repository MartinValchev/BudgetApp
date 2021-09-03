import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BudgetBoardComponent } from './budget-board/budget-board.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NoteThumbnailComponent } from './budget-note/note-thumbnail.component';
import { NotesService } from './note.service';
import { BudgetNoteDetailComponent } from './budget-note-detail/budget-note-detail.component';
import { Error404Component } from './error404/error404.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { NotesRouteService } from './notes-rooute.service';
import { CreateNoteComponent } from './create/create-note/create-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BudgetBalanceComponent } from './budget-balance/budget-balance.component';

@NgModule({
  declarations: [
    AppComponent,
    BudgetBoardComponent,
    NavigationComponent,
    NoteThumbnailComponent,
    BudgetNoteDetailComponent,
    Error404Component,
    CreateNoteComponent,
    BudgetBalanceComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [NotesService, NotesRouteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
