import {
  Expenses as ExpensesType,
  History as HistoryType,
} from "../types/expenses";
const Tracker = ({
  expensesData,
  transactionHistory,
}: {
  expensesData: ExpensesType;
  transactionHistory: HistoryType[];
}) => {
  return (
    <main className="flex flex-col gap-6 p-8">
      {/* Overview Section */}
      <div className="bg-white shadow-lg rounded-3xl p-6 flex justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Balance</h2>
          <p className="text-4xl font-bold text-gray-800">
            ${expensesData.balance}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <span className="font-medium text-gray-600">
              Income: ${expensesData.income}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            <span className="font-medium text-gray-600">
              Expense: ${expensesData.expense}
            </span>
          </div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-white shadow-lg rounded-3xl p-6">
        <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
        <ul className="divide-y">
          {transactionHistory.map((transaction, index) => (
            <li key={index} className="flex justify-between py-4">
              <span>{transaction.date.toLocaleDateString()}</span>
              <span>{transaction.description}</span>
              <span
                className={`font-semibold ${
                  transaction.operation === "income"
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                ${transaction.amount}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Tracker;
