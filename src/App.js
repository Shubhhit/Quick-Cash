import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Components/LandingPage/LandingPage";
import Sell from "./Components/SellNow/Sell";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Store from "./Components/Store/Store";
import DetailPage from "./Components/Details/DetailPage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Cart from "./Components/Cart/Cart";

function App() {
  return (

      <BrowserRouter>
      <Header/>
        <Routes> 
        <Route path='/cart' element={<Cart/>} exact/>
          <Route path='/details' element={<DetailPage/>} exact/>
          <Route path='/store' element={<Store />} exact/>
          <Route path='/sell-now' element={<Sell />} exact/>
          <Route path='/' element={<LandingPage />} exact/>
        </Routes>
        <Footer/>
      </BrowserRouter>

  );
}

export default App;
