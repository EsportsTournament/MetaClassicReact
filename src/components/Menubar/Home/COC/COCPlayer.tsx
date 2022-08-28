import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";

function COCPlayer(props: any) {
    return (
        <div className="mt-player-card">
            <div className="mt-player-cardBody">
                <div className="mt-player-left">
                    <div className="profilePic">
                        {props.profile.league.name !== "" ?
                            <img className="profileImage" src={props.profile.league.icon.url} alt="leauge image" />
                            : <><RiAccountCircleFill /> </>}
                    </div>
                    <div className="mt-player-cardTitle">{props.profile.name}</div>
                </div>
                <div className="mt-player-right">
                    {props.profile.tag !== "" ?
                        <div className="mt-player-cardValues">
                            <span className="mt-player-cardkey">Player Id:</span>
                            <div className="mt-player-cardValue ">{props.profile.tag}</div>
                        </div> : <></>}
                    {props.profile.townHallLevel !== "" ?
                        <div className="mt-player-cardValues">
                            <span className="mt-player-cardkey">TH:</span>
                            <div className="mt-player-cardValue ">
                                <img src={require(`./../../../../assets/images/th/${props.profile.townHallLevel}.webp`)} alt="town hall iamge" />
                                {props.profile.townHallLevel}
                            </div>
                        </div> : <></>}
                    {props.profile.builderHallLevel !== null ?
                        <div className="mt-player-cardValues">
                            <span className="mt-player-cardkey">BH:</span>
                            <div className="mt-player-cardValue ">
                                <img src={require(`./../../../../assets/images/bh/${props.profile.builderHallLevel}.webp`)} alt="builder hall iamge" />
                                {props.profile.builderHallLevel}
                            </div>
                        </div> : <></>}
                    {props.profile.role !== "" ?
                        <div className="mt-player-cardValues">
                            <span className="mt-player-cardkey">Role:</span>
                            <div className="mt-player-cardValue ">{props.profile.role}</div>
                        </div> : <></>}
                </div>
            </div>
            <div className="mt-player-cardFooter">
            </div>
            <div className="mt-player-cardFooter">
                {props.profile.labels.length > 0 ?
                    <div className="mt-social-cardChips">
                        {props.profile.labels.map((label: any, index: number) => {
                            return <div className="mt-social-chip" key={index}>
                                <img className="labelIcon" src={label.icon.url} alt="label image" />
                                {label.name}
                            </div>;
                        })}
                    </div> : <></>}
            </div>
        </div>
    );
}

export default COCPlayer;