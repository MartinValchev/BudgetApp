import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { NotesService } from "./note.service";

@Injectable()
export class NotesRouteService implements CanActivate {

  constructor(private notesService: NotesService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
    const noteExists = !!this.notesService.getNoteById(+route.params['id'])
    if (!noteExists) {
      this.router.navigate(['/404'])
    }
    return noteExists;
  }

}
