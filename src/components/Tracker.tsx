const Tracker = () => {
  return (
    <main className="shadow-lg flex justify-between gap-3 p-11">
      <div className="flex-1 gap-2 flex flex-col justify-center items-center ">
        <h2 className="text-2xl">Balance is $500</h2>
        <div className="flex flex-col gap-2 w-full shadow-md bg-slate-100">
          <div className="flex flex-col shadow-sm justify-center items-center p-5">
            <span className="font-semibold text-lg">$1000</span>
            <span>Total Income</span>
          </div>
          <div className="flex flex-col shadow-sm justify-center items-center p-5">
            <span className="font-semibold text-lg">$500</span>
            <span>Total Expense</span>
          </div>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center  ">
        <p>Grafico</p>
      </div>
    </main>
  );
};

export default Tracker;
