import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Navbar from "./component/UI/Navbar";

function App() {
  return (
    <section className="flex flex-row">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </section>
  );
}

export default App;
