import { Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Component/Details";
import Home from "./Component/Home";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
