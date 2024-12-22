export type Expenses = {
  balance: number;
  income: number;
  expense: number;
};

export type Transaction = {
  description: string;
  amount: number;
  operation: "income" | "expense";
};
