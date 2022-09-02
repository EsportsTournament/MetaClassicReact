import React from "react";

function WarPlayer(props: any) {
    return (
        <div className="warPlayer">
            <div className="member">
                <img src={require(`./../../../../assets/images/th/${props.player.th}.webp`)} alt="town hall iamge" />
                {props.player.name} ({props.player.pos})
            </div>
            <div className="attacks">
                {props.player.attacks.map( (attack: any, index: number) => {
                    return <div className="attack" key={index}>
                        {attack.stars === 3 ? 
                         <img src={require("./../../../../assets/images/th/_3.webp")} alt="town hall iamge" />
                       :  <img src={require(`./../../../../assets/images/th/${attack.defenderTh}_${attack.stars}.webp`)} alt="town hall iamge" />
                    }
                        {attack.defenderName} ({attack.defenderMapPosition})
                    </div>;
                })}
            </div>
            <div className="score-label">
                <span>Total Score</span> 
                <span className="score">
                    {props.player.score}
                </span>
            </div>
        </div>
    );
}

export default WarPlayer;