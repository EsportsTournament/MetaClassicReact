import React, { useEffect, useState } from "react";
import axios from "axios";
import SubHeader from "./SubHeader";
import info from "./../../../assets/info.json";
import ClanCard from "./BGMI/ClanCard";
import "./Home.scss";
import Player from "./BGMI/Player";
import COCClan from "./COC/COCClan";
import COCPlayer from "./COC/COCPlayer";
import Loading from "../../Shared/Loading";

const Home = () => {
  const [game, setGame] = useState(info.games[0]);
  const [gameList, setGameList] = useState([] as any[]);
  const handleGameSelect = (gameId: number) => {
    setGame(info.games[gameId]);
  };
  const [clan, setClan] = useState({} as any);
  const [clanLink, setClanLink] = useState("");
  const [cocPlayerList, setCOCPlayerList] = useState([] as any[]);
  useEffect(() => {
    async function getMyPlayers() {
      return await axios.post("https://mysterious-beyond-28283.herokuapp.com/common/fetchAllPlayersDetails", {
        "clan": "ckzo"
      }, {
        withCredentials: true,
      })
        .then((res: any) => {
          console.log(res.data);
          setCOCPlayerList(res.data.clanPlayers);
          setClan(res.data.clan);
          setClanLink(res.data.clanLink);
        });
    }
    const getGameList = info.games.map(game => {
      return { "name": game.name, "fullName": game.fullName };
    });
    getMyPlayers();
    setGameList(getGameList);
  }, []);

  return (
    <div className={(game.name === "COC" ? "bgCoc" : "bgBgmi")}>
      <div className="homePage">
        <SubHeader games={gameList} onGameSelect={handleGameSelect} />
        {
          cocPlayerList[0] ? <>
            {
              game.name === "COC" ? <>
                <div className="clanCards">
                  <COCClan clan={clan} clanLink={clanLink} />
                </div>
                <div className="titlePlayer">Players</div>
                <div className="playerGrid">
                  {cocPlayerList.sort( (a,b) => b.received - a.received).map((player, index) => {
                    return <COCPlayer profile={player} key={index} />;
                  })}
                </div>
              </> : <>
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
              </>
            }
          </> : <>
            <Loading />
          </>
        }
      </div>
    </div>
  );
};

export default Home;
