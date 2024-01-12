import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Absolutely from "./components/Absolutely";
import Home from "./components/Home";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/absolutely" element={<Absolutely />} />
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
