import { useState } from "react";
import { Expenses as ExpensesType } from "./types/expenses";
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
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-full">
      <Navbar
        handleNewTransaction={handleNewTransaction}
        expensesData={expensesData}
        setExpensesData={setExpensesData}
      />
      {isOpen && <TransactionForm setExpensesData={setExpensesData} />}
      <Tracker expensesData={expensesData} />
    </div>
  );
}

export default App;
