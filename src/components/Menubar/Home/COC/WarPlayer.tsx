import React from "react";

function WarPlayer(props: any) {
  return (
   <div className="warPlayer">
    {props.player.name} ने {props.player.score}% स्कोर प्राप्त किया॰
   </div>
  );
}

export default WarPlayer;