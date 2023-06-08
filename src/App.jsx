import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import ThemeBar from "./layout/ThemeBar";
import InfoPage from "./pages/InfoPage";
import MainPage from "./pages/MainPage";

function App() {
  const themeList = ["light", "synthwave", "cyberpunk", "valentine"];
  const [theme, setTheme] = useState("light");

  return (
    <div className="App" data-theme={theme}>
      <div className="max-w-5xl mx-auto relative pb-4">
        <Header />
        <ThemeBar theme={theme} setTheme={setTheme} themeList={themeList} />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/:drink" element={<InfoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
