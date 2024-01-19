import { useGetPlayersQuery } from "../API/index";
import { useDeletePlayerMutation } from "../API/index";
import "../../src/index.css";
import store from "../APP/store";

const Players = () => {
  const { data, error, isLoading } = useGetPlayersQuery();
  const [deletePlayer] = useDeletePlayerMutation();

  const handleDelete = async (playerId) => {
    try {
      await deletePlayer(playerId)(store.dispatch, store.getState, undefined);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>error fetching players</p>;
  }
  console.log(data);

  return (
    <div className="players">
      {data.data.players.map((player) => (
        <div key={player.id} className="player-card player-image-container">
          <img
            className="player-image"
            src={player.imageUrl}
            alt={player.name}
          />

          <div className="player-details">
            <h2> {player.name} </h2>

            {/* <p> {player.breed} </p>

            <p> {player.status} </p> */}
            <button>See Details</button>
            <button
              onClick={() => handleDelete(player.id)}
              disabled={isLoading}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
