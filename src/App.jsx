import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import DrinkList from "./components/DrinkList";
import EmployeeList from "./components/EmployeeList";
import ThemeBar from "./layout/ThemeBar";
import { resetApp } from "./store/actions";
import CocktailImg from "./assets/cocktail.svg";

function App() {
  const dispatch = useDispatch();
  const themeList = ["light", "synthwave", "cyberpunk", "valentine"];
  const [theme, setTheme] = useState("light");

  return (
    <div className="App" data-theme={theme}>
      <div className="max-w-5xl mx-auto relative">
        <header className="flex flex-col sm:flex-row justify-center items-center py-5">
          <img src={CocktailImg} alt="cocktail" className="h-20" />
          <h1 className="text-5xl font-[Pattaya]">Office Cocktail</h1>
        </header>

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
