
import './App.css';
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import About from './pages/About';
import Listings from './pages/Listings';
import NewListing from './pages/NewListing';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/listings" element={<Listings />}></Route>
            <Route exact path='/addListing' element={<NewListing />}></Route>
            <Route exact path="*" element={<PageNotFound />}></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
