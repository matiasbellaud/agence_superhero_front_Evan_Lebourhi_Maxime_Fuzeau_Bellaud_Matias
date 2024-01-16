import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Configuration from "./components/Configuration";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/explorer" element={<MainPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/configuration" element={<Configuration />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
