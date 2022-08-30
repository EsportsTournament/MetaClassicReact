import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../../Shared/Loading";

function COCWar() {
    const [war, setWar] = useState({} as any);
    // var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    useEffect(() => {
        async function getMyWar() {
            return await axios.post("https://mysterious-beyond-28283.herokuapp.com/common/fetchCurrentWarDetails", {
                "clan": "ckzo"
            }, {
                withCredentials: true,
            })
                .then((res: any) => {
                    console.log(res.data);
                    setWar(res.data.clanWar);
                });
        }
        getMyWar();
    }, []);

    function leaderBoard(members: any[], opponent: any[]) {
        const leaderBoard: any[] = [];
        members.forEach(member => {
            const attacker = {
                name: member.name,
                score: 0,
                pos: member.mapPosition,
                th: member.townHallLevel,
                attacks: [] as any[],
                defence: [] as any[]
            };
            member.attacks.forEach((attack: any) => {
                attacker.attacks.push({
                    stars: attack.stars,
                    name: getNameOfDefender(attack.defenderTag, opponent)
                });
                attacker.score += attack.destruction;
            });
            leaderBoard.push(attacker);
        });
        return leaderBoard;
    }

    function getNameOfDefender(tag: string, members: any[]) {
        return tag;
    }

    function warEvents(members: any[]) {
        const warEvents: any[] = [];
        members.forEach(member => {
            member.attacks.forEach((attack: any) => {
                warEvents.push(attack);
            });
        });
        return warEvents;
    }

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
                            {(new Date(war.endTime)).toLocaleString("hi-IN", {dateStyle: "long", timeStyle:"long"})}
                        </span>
                    </div>
                    <div className="leaderBoard">

                    {
                        leaderBoard(war.clan.members, war.opponent.members).sort( function(a,b) {
                            return b.score - a.score;
                        }).map(leader => {
                            return <>
                                <div>
                                 {leader.name} ने {leader.score}% स्कोर प्राप्त किया॰
                                </div>
                            </>;
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