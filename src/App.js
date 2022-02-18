import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Sell from "./Components/SellNow/Sell";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./Components/Store/Store";
import Trail from "./Components/Trail";
import DetailPage from "./Components/Details/DetailPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (

      <BrowserRouter>
      <Header/>
        <Routes> 
          <Route path='/details' element={<DetailPage/>} exact/>
          <Route path='/trail' element={<Trail />} exact/>
          <Route path='/store' element={<Store />} exact/>
          <Route path='/sell-now' element={<Sell />} exact/>
          <Route path='/' element={<LandingPage />} exact/>
        </Routes>
        <Footer/>
      </BrowserRouter>

  );
}

export default App;
