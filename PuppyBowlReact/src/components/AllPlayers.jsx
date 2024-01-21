import { useGetPlayersQuery } from "../API/index";
import { useDeletePlayerMutation } from "../API/index";
import "../../src/index.css";
import store from "../APP/store";
import "bootstrap/dist/css/bootstrap.css";

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
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button type="button" className="btn btn-secondary">
                  Details
                </button>
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
