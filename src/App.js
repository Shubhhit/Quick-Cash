import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} exact/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
