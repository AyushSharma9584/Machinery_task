import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Sidebar from "./Components/Sidebar";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/nav" element={<Sidebar/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
