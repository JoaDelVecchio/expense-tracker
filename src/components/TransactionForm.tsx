import { useState } from "react";
import {
  Expenses as ExpensesType,
  Transaction as TransactionType,
} from "../types/expenses";

const TransactionForm = ({
  setExpensesData,
}: {
  setExpensesData: React.Dispatch<React.SetStateAction<ExpensesType>>;
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
      [name]: name === "amount" ? parseFloat(value) || 0 : value, // Handle "amount" separately
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!transactionData.description || transactionData.amount <= 0) {
      alert("Please provide a valid description and amount.");
      return;
    }

    // Update the parent state
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

    // Reset the form
    setTransactionData({
      description: "",
      amount: 0,
      operation: "income",
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] max-w-lg bg-white rounded-xl shadow-2xl p-8"
      >
        <p className="text-3xl font-semibold text-center mb-6 text-gray-900">
          Add New Transaction
        </p>

        {/* Description Input */}
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter Description
        </label>
        <input
          id="description"
          name="description"
          type="text"
          value={transactionData.description}
          onChange={handleChanges}
          placeholder="Enter a description"
          className="w-full border bg-white border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-4 focus:ring-blue-500"
        />

        {/* Amount Input */}
        <label
          htmlFor="amount"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Enter Amount
        </label>
        <input
          id="amount"
          name="amount"
          value={transactionData.amount || ""}
          onChange={handleChanges}
          type="number"
          placeholder="Enter the amount"
          className="w-full border bg-white border-gray-300 rounded-lg p-3 mb-6 focus:outline-none focus:ring-4 focus:ring-blue-500"
        />

        {/* Radio Buttons */}
        <fieldset className="mb-6">
          <legend className="text-sm font-medium text-gray-700 mb-4">
            Transaction Type
          </legend>
          <div className="flex items-center mb-4">
            <input
              id="expense"
              name="operation"
              type="radio"
              value="expense"
              onChange={handleChanges}
              checked={transactionData.operation === "expense"}
              className="mr-3 focus:ring-blue-500"
            />
            <label htmlFor="expense" className="text-gray-700">
              Expense
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="income"
              name="operation"
              type="radio"
              value="income"
              onChange={handleChanges}
              checked={transactionData.operation === "income"}
              className="mr-3 focus:ring-blue-500"
            />
            <label htmlFor="income" className="text-gray-700">
              Income
            </label>
          </div>
        </fieldset>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
