import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./layout/Header";
import InputBar from "./layout/InputBar";
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
        <InputBar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/drink/:drink" element={<InfoPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
