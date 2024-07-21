import { Navigate, Route, Routes } from "react-router-dom";
import MyMoves from "./pages/MyMoves/MyMoves";
import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import BlankPage from "./pages/BlankPage/BlankPage";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/my-moves" element={<MyMoves />} />
        <Route path="/" element={<Navigate to="/my-moves" replace />} />
        <Route path="/*" element={<BlankPage />} />
      </Routes>
    </div>
  );
}

export default App;
