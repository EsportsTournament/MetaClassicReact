import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";

function Player(props: any) {
    return (
        <div className="mt-card">
            <div className="mt-cardTitle">{props.profile.name}</div>
            <div className="mt-cardBody">
                {props.profile.image !== "" ?
                    <div className="mt-cardValues">
                        <div className="mt-cardValue ">
                            <img src={props.profile.image} alt="profile image" />
                        </div>
                    </div> : <><RiAccountCircleFill /> </>}
                    {props.profile.ign !== "" ?
                    <div className="mt-cardValues">
                          <span className="mt-cardkey">IGN:</span>
                        <div className="mt-cardValue ">{props.profile.ign}</div>
                    </div> : <></>}
                    {props.profile.playerId !== "" ?
                    <div className="mt-cardValues">
                         <span className="mt-cardkey">Player Id:</span>
                        <div className="mt-cardValue ">{props.profile.playerId}</div>
                    </div> : <></>}
                    {props.profile.clanRole !== "" ?
                    <div className="mt-cardValues">
                         <span className="mt-cardkey">Role:</span>
                        <div className="mt-cardValue ">{props.profile.clanRole}</div>
                    </div> : <></>}
                    {props.profile.tags.length > 0 ?
                    <div className="mt-cardChips">
                         {props.profile.tags.map( (tag: string, index: number) => {
                            return <div className="mt-chip" key={index}>{tag}</div>;
                         })}
                    </div> : <></>}

            </div>
        </div>
    );
}

export default Player;