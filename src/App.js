import "./App.css";
import { Login } from "./pages/login/Login";
import { Home } from "./pages/home/Home";
import { Route, Routes } from "react-router-dom";
import { Registration } from "./pages/registration/Registration";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
