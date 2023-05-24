import { useContext, useState } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
import { RequireAuth } from "./contexts/Auth/RequireAuth";
import { AuthContext } from "./contexts/Auth/AuthContext";
import { Login } from "./pages/Login";

function App() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await auth.singout();
    navigate('/');

  }

  return (
    <div className="App">
      {auth.user && <div><header>
        <h1>Header do site</h1>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/private"}>Privada</Link>
          {auth.user && <button onClick={handleLogout}>Sair</button>}
        </nav>
      </header><hr /></div>}
      <Routes>
        <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="/private" element={<RequireAuth><Private/></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
