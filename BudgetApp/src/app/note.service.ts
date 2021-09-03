import { Injectable } from "@angular/core";
import { OnInit } from "@angular/core";
import { BudgetNote, BudgetNoteType } from "./model/BudgetNote";

@Injectable()
export class NotesService {

  note1: BudgetNote | undefined;
  note2: BudgetNote | undefined;
  note3: BudgetNote | undefined;

  noteElements = new Array<BudgetNote>();

  constructor() {
  }

  getBudgetNotes() {
    this.note1 = new BudgetNote();
    this.note1.id = 1;
    this.note1.name = 'Remont Boiler';
    this.note1.type = BudgetNoteType.Expence;
    this.note1.amount = 150;
    this.note1.date = new Date();
    this.note1.description = 'remont boiler';

    this.note2 = new BudgetNote();
    this.note2.id = 2;
    this.note2.name = 'Laminat spalnq';
    this.note2.type = BudgetNoteType.Expence;
    this.note2.amount = 350;
    this.note2.date = new Date();
    this.note2.description = 'laminat za spalnq';

    this.note3 = new BudgetNote();
    this.note3.id = 3;
    this.note3.name = 'Avans zaplata';
    this.note3.type = BudgetNoteType.Income;
    this.note3.amount = 550;
    this.note3.date = new Date();
    this.note3.description = 'avans do zaplat';

    this.noteElements.push(this.note1);
    this.noteElements.push(this.note2);
    this.noteElements.push(this.note3);
    return this.noteElements;
  }

  getNoteById(id: number) {
    this.noteElements = this.getBudgetNotes();
    console.log('------------------')
    console.log(this.noteElements.find(n => n.id === id))
    return this.noteElements.find(n => n.id === id);
  }

  getLastNoteIndex() {
    return this.noteElements.length;
  }
}
