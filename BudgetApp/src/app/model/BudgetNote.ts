export class BudgetNote {
  id: number | undefined;
  name: string | undefined;
  type: BudgetNoteType | undefined;
  amount = 0;
  date: Date = new Date();
  description: string| undefined;
}

export enum BudgetNoteType {
  Expence = "EXPENCE",
  Income = 'INCOME'
}
