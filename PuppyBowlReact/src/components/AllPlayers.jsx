import { useGetPlayersQuery } from "../API/index";
import { useDeletePlayerMutation } from "../API/index";
import "../../src/index.css";
import store from "../APP/store";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Players = () => {
  const { data, error, isLoading } = useGetPlayersQuery();
  const [deletePlayer] = useDeletePlayerMutation();
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();

  const handleDetails = (player) => {
    navigate(`/player/${player.id}`);
  };

  const handleDelete = async (playerId) => {
    try {
      await deletePlayer(playerId)(store.dispatch, store.getState, undefined);
      setPlayers((prevPlayers) =>
        prevPlayers.filter((player) => player.id !== playerId)
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (data && data.data) {
      setPlayers(data.data.players);
    }
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>error fetching players</p>;
  }
  console.log(data);

  return (
    <div className="container">
      <div className="row">
        {data.data.players.map((player) => (
          <div key={player.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={player.imageUrl}
                className="card-img-top"
                alt={player.name}
              />
              <div className="card-body">
                <h5 className="card-title">{player.name}</h5>
                <p className="card-text">Breed: {player.breed}</p>
                <Link to={`/player/${player.id}`}>
                  <button
                    onClick={() => handleDetails(player)}
                    type="button"
                    className="btn btn-secondary"
                  >
                    Details
                  </button>
                </Link>
                <button
                  onClick={() => handleDelete(player.id)}
                  className="btn btn-danger ml-2"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
