import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import Social from "./Social";

function Player(props: any) {
    return (
        <div className="mt-player-card">
            <div className="mt-player-cardBody">
                <div className="mt-player-left">
                    <div className="profilePic">
                        {props.profile.image !== "" ?
                            <img loading="lazy" className="profileImage" src={props.profile.image} alt="profile image" />
                            : <><RiAccountCircleFill /> </>}
                    </div>
                    <div className="mt-player-cardTitle">{props.profile.name}</div>
                </div>
                <div className="mt-player-right">
                    {props.profile.ign !== "" ?
                        <div className="mt-player-cardValues">
                            <span className="mt-player-cardkey">IGN:</span>
                            <div className="mt-player-cardValue ">{props.profile.ign}</div>
                        </div> : <></>}
                    {props.profile.playerId !== "" ?
                        <div className="mt-player-cardValues">
                            <span className="mt-player-cardkey">Player Id:</span>
                            <div className="mt-player-cardValue ">{props.profile.playerId}</div>
                        </div> : <></>}
                    {props.profile.clanRole !== "" ?
                        <div className="mt-player-cardValues">
                            <span className="mt-player-cardkey">Role:</span>
                            <div className="mt-player-cardValue ">{props.profile.clanRole}</div>
                        </div> : <></>}
                </div>
            </div>
            <div className="mt-player-cardFooter">
                {props.profile.social.length > 0 ?
                    <div className="mt-social-cardChips">
                        {props.profile.social.map((socObj: any, index: number) => {
                            return <Social key={index} social={socObj} />;
                        })}
                    </div> : <></>}
            </div>
            <div className="mt-player-cardFooter">
                {props.profile.tags.length > 0 ?
                    <div className="mt-social-cardChips">
                        {props.profile.tags.map((tag: string, index: number) => {
                            return <div className="mt-social-chip" key={index}>{tag}</div>;
                        })}
                    </div> : <></>}
            </div>
        </div>
    );
}

export default Player;