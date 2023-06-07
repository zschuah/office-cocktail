import "./App.css";
import Bar from "./components/Bar";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <div className="App flex">
      <EmployeeList />
      <Bar />
    </div>
  );
}

export default App;
