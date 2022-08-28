import React from "react";
import Social from "../BGMI/Social";

function COCClan(props: any) {

  const discord = {
    "platform": "discord",
    "link": "https://discord.gg/NdHgTtddms",
    "name": "The Gaurdions"
  };

  return (
    <div className="mt-card">
      <div className="mt-cardTitle">
        <img className="mt-badgeImage" src="https://api-assets.clashofclans.com/badges/512/SfewAMajmC1nKwju4MMzp91hmJw8K677Vg7nOCfZubU.png" alt="Clan Badge Image" />
        {props.clan.name}
        <img className="mt-badgeImage" src="https://api-assets.clashofclans.com/badges/512/SfewAMajmC1nKwju4MMzp91hmJw8K677Vg7nOCfZubU.png" alt="Clan Badge Image" />
      </div>
      <div className="mt-cardBody">
        {props.clan.tag !== "" ?
          <div className="mt-cardValues">
            <span className="mt-cardkey">Clan Id: </span>
            <div className="mt-cardValue ">{props.clan.tag}</div>
          </div> : <></>}
        {props.clan.level !== "" ?
          <div className="mt-cardValues">
            <span className="mt-cardkey">Clan Level: </span>
            <div className="mt-cardValue ">{props.clan.level}</div>
          </div> : <></>}
        {discord.link !== "" ?
          <div className="mt-cardValues">
            <Social social={discord} />
          </div>
          : <></>}

      </div>
    </div>
  );
}

export default COCClan;