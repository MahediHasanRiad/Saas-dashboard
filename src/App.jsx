import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./component/UI/Navbar";
import Invoice from "./pages/Invoice";
import Analysis from "./pages/Analysis";
import Schedule from "./pages/Schedule";
import Calenders from "./pages/Calenders";
import Setting from "./pages/Setting";

function App() {
  return (
    <section className="flex flex-row">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/calender" element={<Calenders />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </section>
  );
}

export default App;
