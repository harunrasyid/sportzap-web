import { Routes, Route } from "react-router";
import "./App.css";
import { Home } from "@/modules/general";
import { Meeting, Schedule } from "@/modules/f1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/home" element={<Home />} />
      </Route>
      <Route path="/schedule" element={<Schedule />} />
      <Route path="/meeting" element={<Meeting />} />
    </Routes>
  );
}

export default App;
