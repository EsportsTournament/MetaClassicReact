import React from "react";

function ClanCard(props: any) {
    return (
        <div className="clanCard">
            <div className="clanTitle">{props.clan.clanName}</div>
            <div className="clanBody">
                {props.clan.clanId !=="" ? 
                <div className="clanValues">
                    <span className="key">Clan Id: </span>
                    <div className="value">{props.clan.clanId}</div>
                </div>: <></>}
                {props.clan.clanAlias !=="" ? 
                <div className="clanValues">
                    <span className="key">Clan Alias: </span>
                    <div className="value">{props.clan.clanAlias}</div>
                </div>: <></>}
                {props.clan.clanLevel !=="" ? 
                <div className="clanValues">
                    <span className="key">Clan Level: </span>
                    <div className="value">{props.clan.clanLevel}</div>
                </div>: <></>}
                {props.clan.clanLevel !=="" ? 
                <div className="clanValues">
                    <span className="key">Discord: </span>
                    <div className="value button">
                        <a href={props.clan.discord} > Join </a>
                    </div>
                </div>: <></>}

            </div>
        </div>
    );
}

export default ClanCard;