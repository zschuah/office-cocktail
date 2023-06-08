import { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import DrinkList from "./components/DrinkList";
import EmployeeList from "./components/EmployeeList";
import Header from "./layout/Header";
import ThemeBar from "./layout/ThemeBar";
import { resetApp } from "./store/actions";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import InfoPage from "./pages/InfoPage";

function App() {
  const dispatch = useDispatch();
  const themeList = ["light", "synthwave", "cyberpunk", "valentine"];
  const [theme, setTheme] = useState("light");

  return (
    <div className="App" data-theme={theme}>
      <div className="max-w-5xl mx-auto relative">
        <Header />
        <ThemeBar theme={theme} setTheme={setTheme} themeList={themeList} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:drink" element={<InfoPage />} />
        </Routes>

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
