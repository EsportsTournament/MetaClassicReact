import React from "react";

function ClanCard(props: any) {
    return (
        <div className="mt-card">
            <div className="mt-cardTitle">{props.clan.clanName}</div>
            <div className="mt-cardBody">
                {props.clan.clanId !=="" ? 
                <div className="mt-cardValues">
                    <span className="mt-cardkey">Clan Id: </span>
                    <div className="mt-cardValue ">{props.clan.clanId}</div>
                </div>: <></>}
                {props.clan.clanAlias !=="" ? 
                <div className="mt-cardValues">
                    <span className="mt-cardkey">Clan Alias: </span>
                    <div className="mt-cardValue ">{props.clan.clanAlias}</div>
                </div>: <></>}
                {props.clan.clanLevel !=="" ? 
                <div className="mt-cardValues">
                    <span className="mt-cardkey">Clan Level: </span>
                    <div className="mt-cardValue ">{props.clan.clanLevel}</div>
                </div>: <></>}
                {props.clan.clanLevel !=="" ? 
                <div className="mt-cardValues">
                    <span className="mt-cardkey">Discord: </span>
                    <div className="mt-cardValue mt-button">
                        <a href={props.clan.discord} > Join </a>
                    </div>
                </div>: <></>}

            </div>
        </div>
    );
}

export default ClanCard;