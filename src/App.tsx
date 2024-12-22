import { useState } from "react";
import {
  Expenses as ExpensesType,
  History as HistoryType,
} from "./types/expenses";
import "./App.css";
import Navbar from "./components/Navbar";
import Tracker from "./components/Tracker";
import TransactionForm from "./components/TransactionForm";

function App() {
  const [expensesData, setExpensesData] = useState<ExpensesType>({
    balance: 2000,
    income: 0,
    expense: 0,
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleNewTransaction = () => {
    setIsOpen((prev) => !prev);
  };

  const [transactionHistory, setTransactionHistory] = useState<HistoryType[]>(
    []
  );

  return (
    <div className="flex flex-col h-full">
      <Navbar handleNewTransaction={handleNewTransaction} />
      {isOpen && (
        <TransactionForm
          handleNewTransaction={handleNewTransaction}
          setTransactionHistory={setTransactionHistory}
          setExpensesData={setExpensesData}
        />
      )}
      <Tracker
        transactionHistory={transactionHistory}
        expensesData={expensesData}
      />
    </div>
  );
}

export default App;
