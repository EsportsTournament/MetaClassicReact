import React, { useEffect, useState } from "react";
import SubHeader from "./SubHeader";
import info from "./../../../assets/info.json";
import ClanCard from "./ClanCard";
import "./Home.scss";
import Player from "./Player";

const Home = () => {
  const [game, setGame] = useState(info.games[0]);
  const [gameList, setGameList] = useState([] as any[]);
  const handleGameSelect = (gameId: number) => {
    setGame(info.games[gameId]);
  };
  useEffect(() => {
    const getGameList = info.games.map(game => {
      return { "name": game.name, "fullName": game.fullName };
    });
    setGameList(getGameList);
  }, []);

  return (
    <div className={(game.name === "COC" ? "bgCoc" : "bgBgmi")}>
    <div className="homePage">
      <SubHeader games={gameList} onGameSelect={handleGameSelect} />
      <div className="clanCards">
        {game.clans.map((clan, index) => {
          return <ClanCard clan={clan} key={index} />;
        })}
      </div>
      <div className="titlePlayer">Players</div>
      <div className="playerGrid">
        {game.playerList.map((player, index) => {
          return <Player profile={player} key={index} />;
        })}
      </div>
    </div>
        </div>
  );
};

export default Home;
