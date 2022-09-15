import React from "react";

function WarPlayer(props: any) {
    return (
        <div className="warPlayer">
            <div className="member">
                <img loading="lazy" src={require(`./../../../../assets/images/th/${props.player.th}.webp`)} alt="town hall iamge" />
                {props.player.pos}. {props.player.name}
            </div>
            <div className="attacks">
                {props.player.attacks.map((attack: any, index: number) => {
                    return <div className="attack" key={index}>
                        {attack.stars === 3 ?
                            <img loading="lazy" src={require("./../../../../assets/images/th/_3.webp")} alt="town hall iamge" />
                            : attack.stars === 0 ? <img loading="lazy" src={require(`./../../../../assets/images/th/${attack.defenderTh}.webp`)} alt="town hall iamge" /> :
                                <img loading="lazy" src={require(`./../../../../assets/images/th/${attack.defenderTh}_${attack.stars}.webp`)} alt="town hall iamge" />
                        }
                        {attack.defenderMapPosition}. {attack.defenderName}
                    </div>;
                })}
            </div>
            <div className="score-label">
                <span className="score">
                    {props.player.score}
                </span>
            </div>
        </div>
    );
}

export default WarPlayer;