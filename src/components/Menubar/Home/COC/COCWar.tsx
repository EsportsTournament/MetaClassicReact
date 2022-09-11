import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../../Shared/Loading";
import WarPlayer from "./WarPlayer";

function COCWar() {
    const [war, setWar] = useState({} as any);
    const [warMembers, setWarMembers] = useState([] as any[]);
    // var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    const backendUrl = "https://mysterious-beyond-28283.herokuapp.com";
    // const backendUrl = "http://localhost:8890";
    useEffect(() => {
        async function getMyWar() {
            return await axios.post(`${backendUrl}/common/fetchCurrentWarDetails`, {
                "clan": "ckzo"
            }, {
                withCredentials: true,
            })
                .then((res: any) => {
                    console.log(res.data);
                    setWar(res.data.currentWar);
                    setWarMembers(res.data.members);
                });
        }
        getMyWar();
    }, []);

    if (war.state) {
        return (
            <div className="bgWar">
                <div className="cocWar">
                    <div className="title">
                        <span className="titleBadge">
                            {war.clan.name}
                            <img className="mt-badgeImage" src={war.clan.badge.url} alt="Clan Badge Image" />
                        </span>
                        <span>VS</span>
                        <span className="titleBadge">
                            <img className="mt-badgeImage" src={war.opponent.badge.url} alt="Opponent Badge Image" />
                            {war.opponent.name}
                        </span>
                    </div>
                    <div className="timeLeft">
                        <span>
                            Ends on:
                        </span>
                        <span>
                            {(new Date(war.endTime)).toLocaleString("en-US", { dateStyle: "medium", timeStyle: "medium" })}
                        </span>
                    </div>
                    <div className="leaderBoard">
                        <div className="warPlayer">
                            <div className="title">Member</div>
                            <div className="title">Attacks</div>
                            <div className="title">Score</div>
                        </div>
                        {
                            warMembers
                                .sort(function (a, b) {
                                    return b.score - a.score;
                                })
                                .map((member: any, index: number) => {
                                    return <WarPlayer player={member} key={index} />;
                                })
                        }
                    </div>
                </div>
            </div>
        );
    } else {
        return <div className="bgWar">
            <Loading page="war" />
        </div>;
    }

}

export default COCWar;