import React from "react";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";

function Social(props: any) {
    const openInNewTab = (url: string) =>  {
        window.open(url)!.focus();
       };
    return (
        <div>
            <div className="mt-player-cardChips">
                {props.social.platform === "youtube" ?
                    <div className="mt-player-chip youtubeFill" onClick={() => {
                        openInNewTab(props.social.link);
                    }} >
                        <AiFillYoutube />
                        {props.social.name}
                    </div>
                    : <></>}
                {props.social.platform === "instagram" ?
                    <div className="mt-player-chip instagramFill" onClick={() => {
                        openInNewTab(props.social.link);
                    }} >
                        <AiOutlineInstagram />
                        {props.social.name}
                    </div>
                    : <></>
                }
            </div>
        </div>
    );
}

export default Social;