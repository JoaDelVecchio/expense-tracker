import {
  Expenses as ExpensesType,
  History as HistoryType,
} from "../types/expenses";
const Tracker = ({
  expensesData,
  transactionHistory,
  handleNewTransaction,
}: {
  expensesData: ExpensesType;
  transactionHistory: HistoryType[];
  handleNewTransaction: () => void;
}) => {
  return (
    <main className="flex flex-col gap-5">
      <div className="shadow-lg flex justify-between gap-3 p-11">
        <div className="flex-1 gap-2 flex flex-col justify-center items-center ">
          <h2 className="text-2xl">Balance ${expensesData.balance}</h2>
          <div className="flex flex-col gap-2 w-full shadow-md bg-slate-100">
            <div className="flex flex-col shadow-sm justify-center items-center p-5">
              <span className="font-semibold text-lg">
                ${expensesData.income}
              </span>
              <span>Total Income</span>
            </div>
            <div className="flex flex-col shadow-sm justify-center items-center p-5">
              <span className="font-semibold text-lg">
                ${expensesData.expense}
              </span>
              <span>Total Expense</span>
            </div>
          </div>
        </div>
        <div className="flex flex-1 justify-center items-center  ">
          <p>Grafico</p>
        </div>
      </div>
      <div className="shadow-sm">
        <h2>Transaction History</h2>
        <ul>
          {transactionHistory.map((transaction) => (
            <div className="flex gap-5">
              <li>{transaction.date.toLocaleDateString()}</li>
              <li>{transaction.description}</li>
              <li>{transaction.amount}</li>
              <li>{transaction.operation}</li>
            </div>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Tracker;
