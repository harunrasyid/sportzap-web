import { Routes, Route } from "react-router";
import { Home } from "@/modules/general";
import "./App.css";
import { Schedule } from "@/modules/f1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  );
}

export default App;
