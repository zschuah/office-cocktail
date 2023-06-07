import { useDispatch } from "react-redux";
import "./App.css";
import Bar from "./components/Bar";
import EmployeeList from "./components/EmployeeList";
import { resetApp } from "./store/actions";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button
        className="btn block mx-auto"
        onClick={() => dispatch(resetApp())}
      >
        Reset
      </button>
      <div className="flex">
        <Bar />
        <EmployeeList />
      </div>
    </div>
  );
}

export default App;
