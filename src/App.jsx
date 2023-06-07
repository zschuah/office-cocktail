import { useDispatch } from "react-redux";
import "./App.css";
import DrinkList from "./components/DrinkList";
import EmployeeList from "./components/EmployeeList";
import { resetApp } from "./store/actions";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ThemeBar from "./layout/ThemeBar";

function App() {
  const dispatch = useDispatch();
  const themeList = ["light", "synthwave", "cyberpunk", "valentine"];
  const [theme, setTheme] = useState("light");

  return (
    <div className="App" data-theme={theme}>
      <div className="max-w-5xl mx-auto relative">
        <h1 className="text-center text-5xl py-5 pt-20 sm:pt-5">
          Office Cocktail
        </h1>

        <ThemeBar theme={theme} setTheme={setTheme} themeList={themeList} />

        <main className="flex flex-col md:flex-row">
          <DrinkList />
          <EmployeeList />
        </main>

        <button
          className="btn btn-accent block mx-auto absolute top-4 right-4"
          onClick={() => dispatch(resetApp())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
