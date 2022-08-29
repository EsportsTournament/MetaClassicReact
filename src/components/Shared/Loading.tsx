import React from "react";

function Loading() {
    return (
        <div className="centerLoader">
            <div className="loadingText">
                Loading...
            </div>
            <img src={require("./../../assets/images/loadingCOC.gif")} alt="loading gif" />
        </div>
    );
}

export default Loading;