import "./App.css";
import { CardsList } from "./components/CardsList/CardsList";
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div className="app">
      <CardsList />
      <ToastContainer position={"top-center"} />
    </div>
  );
}

export default App;
