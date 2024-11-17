import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";
import LandingPage from "./pages/LandingPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ResultPage from "./pages/ResultPage/ResultPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search-page" element={<SearchPage />} />
        <Route path="/result-page" element={<ResultPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
