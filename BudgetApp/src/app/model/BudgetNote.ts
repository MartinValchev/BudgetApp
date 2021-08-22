export class BudgetNote {
  name: string | undefined;
  type: BudgetNoteType | undefined;
  amount: number | undefined;
  date: Date = new Date();
  notes: string| undefined;
}

export enum BudgetNoteType {
  Expence = "EXPENCE",
  Income = 'INCOME'
}
