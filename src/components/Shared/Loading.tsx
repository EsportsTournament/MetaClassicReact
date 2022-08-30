import React from "react";

function Loading(props: any) {
    return (
        <div className="centerLoader">
            <div className="loadingText">
                Loading...
            </div>
            {props.page === "war" ?  <img src={require("./../../assets/images/loadingWar.gif")} alt="loading gif" /> : 
            <img src={require("./../../assets/images/loadingCOC.gif")} alt="loading gif" />
            }
        </div>
    );
}

export default Loading;