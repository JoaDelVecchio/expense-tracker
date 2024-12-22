const Navbar = () => {
  const handleNewTransaction = () => {};
  return (
    <header className="shadow-lg w-full flex justify-between items-center p-5">
      <h1 className="font-bold text-lg">Expense Tracker</h1>
      <button
        className="border-black text-sm font-medium p-2 hover:bg-black hover:border-white hover:text-white transition duration-300 ease-in-out"
        onClick={handleNewTransaction}
      >
        Add New Transaction
      </button>
    </header>
  );
};

export default Navbar;
