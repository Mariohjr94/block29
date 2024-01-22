import "./index.css";
import Header from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import { Routes, Route, useParams } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/players" Component={AllPlayers} />
        <Route path="/add-players" Component={NewPlayerForm} />
      </Routes>
    </>
  );
}

export default App;
