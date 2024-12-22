import { useState } from "react";
import {
  Expenses as ExpensesType,
  Transaction as TransactionType,
  History as HistoryType,
} from "../types/expenses";

const TransactionForm = ({
  setExpensesData,
  setTransactionHistory,
  handleNewTransaction,
}: {
  setExpensesData: React.Dispatch<React.SetStateAction<ExpensesType>>;
  setTransactionHistory: React.Dispatch<React.SetStateAction<HistoryType[]>>;
  handleNewTransaction: () => void;
}) => {
  const [transactionData, setTransactionData] = useState<TransactionType>({
    description: "",
    amount: 0,
    operation: "income",
  });

  const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTransactionData((prev) => ({
      ...prev,
      [name]: name === "amount" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setExpensesData((prev) =>
      transactionData.operation === "income"
        ? {
            balance: prev.balance + transactionData.amount,
            income: prev.income + transactionData.amount,
            expense: prev.expense,
          }
        : {
            balance: prev.balance - transactionData.amount,
            income: prev.income,
            expense: prev.expense + transactionData.amount,
          }
    );

    setTransactionHistory((prev) => [
      ...prev,
      { date: new Date(), ...transactionData },
    ]);

    setTransactionData({ description: "", amount: 0, operation: "income" });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-lg bg-white rounded-3xl shadow-2xl p-8 transition-all duration-300"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            New Transaction
          </h2>
          <button
            type="button"
            onClick={handleNewTransaction}
            className="text-gray-500 hover:text-gray-900 transition-all duration-200"
            aria-label="Close Form"
          >
            ×
          </button>
        </div>

        <label htmlFor="description" className="block text-gray-700 mb-2">
          Description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          value={transactionData.description}
          onChange={handleChanges}
          placeholder="Enter a description"
          className="bg-white w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
        />

        <label htmlFor="amount" className="block text-gray-700 mb-2">
          Amount
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          value={transactionData.amount || ""}
          onChange={handleChanges}
          placeholder="Enter the amount"
          className="bg-white w-full p-3 mb-4 border rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all"
        />

        <fieldset className="mb-4">
          <legend className="block text-gray-700 mb-2">Transaction Type</legend>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                id="income"
                name="operation"
                type="radio"
                value="income"
                checked={transactionData.operation === "income"}
                onChange={handleChanges}
                className="focus:ring-blue-300"
              />
              Income
            </label>
            <label className="flex items-center gap-2">
              <input
                id="expense"
                name="operation"
                type="radio"
                value="expense"
                checked={transactionData.operation === "expense"}
                onChange={handleChanges}
                className="focus:ring-blue-300"
              />
              Expense
            </label>
          </div>
        </fieldset>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-all duration-300"
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
