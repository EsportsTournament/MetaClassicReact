import React from "react";
import { FaDiscord, FaHandshake } from "react-icons/fa";
import { RiSwordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

function COCClan(props: any) {

  const navigate = useNavigate();

  const discord = {
    "platform": "discord",
    "link": "https://discord.gg/NdHgTtddms",
    "name": ""
  };

  const navigateToWar = () => {
    navigate("/war");
  };

  const joinClan = () => {
    window.open(props.clanLink);
  };

  const joinDiscord = () => {
    window.open(discord.link);
  };

  return (
    <div className="mt-card">
      <div className="mt-cardTitle">
        <img className="mt-badgeImage" src="https://api-assets.clashofclans.com/badges/512/SfewAMajmC1nKwju4MMzp91hmJw8K677Vg7nOCfZubU.png" alt="Clan Badge Image" />
        <div className="nameTag">
          <div className="clanName">
          {props.clan.name}
          </div>
          <div className="tag">
          {props.clan.tag}
          </div>
        </div>
       
       </div>
      <div className="mt-cardBody">
        {props.clan.labels.length > 0 ?  
          <div className="mt-cardValues">
            {
              props.clan.labels.map( (label: any, index: number) => {
                return <img key={index} className="labelIcon" src={label.icon.url} alt="label image" />;
              })
            }
          </div> : <>bla</>}
        {discord.link !== "" ?
          <div className="mt-social-cardChips">
            <button className="mt-button" onClick={() => {
              joinClan();
            }}>
              <FaHandshake />
              <div className="btn-label">Join Clan</div>
            </button>
            <button className="mt-button bg-discord" onClick={() => {
              joinDiscord();
            }}>
               <FaDiscord />
               <div className="btn-label">Join Discord</div>
            </button>
            <button className="mt-button" onClick={() => {
              navigateToWar();
            }}>
             <RiSwordFill />
             <div className="btn-label">Current War</div>
            </button>
          </div>
          : <></>}

      </div>
    </div>
  );
}

export default COCClan;