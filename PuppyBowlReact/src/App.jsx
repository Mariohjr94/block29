import "./index.css";
import Header from "./components/NavBar";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import { Routes, Route, useParams } from "react-router-dom";
import Player from "./components/SinglePlayer";
import SinglePlayer from "./components/SinglePlayer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/players" Component={AllPlayers} />
        <Route path="/add-players" Component={NewPlayerForm} />
        <Route path="/player/:id" Component={SinglePlayer} />
      </Routes>
    </>
  );
}

export default App;
