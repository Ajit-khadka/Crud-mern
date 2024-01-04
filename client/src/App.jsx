import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserAdd from "./components/addUser/UserAdd";
import UserUpdate from "./components/updateUser/UserUpdate";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UserAdd" element={<UserAdd />} />
        <Route path="/UserUpdate/:id" element={<UserUpdate />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
