import { useGetPlayersQuery } from "../API/index";

const Players = () => {
  const { data, error, isLoading } = useGetPlayersQuery();

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

            <p> {player.breed} </p>

            <p> {player.status} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Players;
