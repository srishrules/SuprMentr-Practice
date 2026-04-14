import { BrowserRouter, Routes, Route } from "react-router-dom";
import Todo from "./Todo";
import Weather from "./Weather";
import Mood from "./Mood";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/mood" element={<Mood />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;