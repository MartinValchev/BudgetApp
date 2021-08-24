import { Component, Input, OnInit } from '@angular/core';
import { BudgetNote, BudgetNoteType } from '../model/BudgetNote';

@Component({
  selector: 'note-thumbnail',
  templateUrl: './note-thumbnail.component.html',
  styleUrls: ['./note-thumbnail.component.css']
})
export class NoteThumbnailComponent implements OnInit {

  @Input() note: BudgetNote | undefined
  id: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
