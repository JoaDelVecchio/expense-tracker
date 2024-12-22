import "./App.css";
import Navbar from "./components/Navbar";
import Tracker from "./components/Tracker";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <Tracker />
    </div>
  );
}

export default App;
