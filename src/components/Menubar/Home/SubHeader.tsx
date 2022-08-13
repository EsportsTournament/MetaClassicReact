import React, { useState } from "react";
function SubHeader(props: any) {
  const [selected, setSelected] = useState(0);
  console.log(props);

  return (
    <div className="gameList">
      {props.games.map((game: any, index: number) => {
        return <span className={"gameName " + (selected === index ? "active" : "")} key={index} title={game.fullName} onClick={() => {
          props.onGameSelect(index);
          setSelected(index);
        }} >{game.name}</span>;
      })}
    </div>
  );
}

export default SubHeader;