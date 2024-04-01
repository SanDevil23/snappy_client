import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import First from "./pages/First";
import Second from "./pages/Second.jsx";
import Sports from "./components/Sports.jsx";
import Entertainment from "./components/Entertainment.jsx";
import Politics from "./components/Politics.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing></Landing>} />
        <Route path="/first" element={<First />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/pols" element={<Politics />} />
        <Route path="/entmt" element={<Entertainment />} />
        <Route path="/second/:articleLink" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
