import React, { useEffect, useState } from "react";
import axios from "axios";
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
  const [playerList, setPlayerList] = useState([]);

  async function getMyPlayers() {
    await axios.post("https://mysterious-beyond-28283.herokuapp.com/common/fetchAllPlayersDetails", {
      "clan": "ckzo"
    }, {
      withCredentials: true,
    })
      .then((res: any) => {
        console.log(res.data);        
        setPlayerList(res.data);
      });
  }
  useEffect(() => {
    const getGameList = info.games.map(game => {
      return { "name": game.name, "fullName": game.fullName };
    });
    setGameList(getGameList);
    getMyPlayers();
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
