import { Routes } from "@angular/router";
import { BudgetBoardComponent } from "./budget-board/budget-board.component";
import { BudgetNoteDetailComponent } from "./budget-note-detail/budget-note-detail.component";
import { CreateNoteComponent } from "./create/create-note/create-note.component";
import { Error404Component } from "./error404/error404.component";
import { NotesRouteService } from "./notes-rooute.service";

export const routes: Routes = [
  {path: 'notes', component: BudgetBoardComponent },
  {path: 'notes/create', component: CreateNoteComponent, pathMatch: 'full'},
  {path: 'note/:id', component: BudgetNoteDetailComponent, canActivate: [NotesRouteService]},
  { path: '404', component: Error404Component },
  {path: '', component: BudgetBoardComponent, pathMatch: 'full'}
]
