import React from "react";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

function Social(props: any) {
    const openInNewTab = (url: string) => {
        window.open(url)!.focus();
    };
    return (
        <div className="mt-social-cardChips">
            {props.social.platform === "youtube" ?
                <div className="mt-social-chip youtubeFill" onClick={() => {
                    openInNewTab(props.social.link);
                }} >
                    <AiFillYoutube />
                    {props.social.name}
                </div>
                : <></>}
            {props.social.platform === "instagram" ?
                <div className="mt-social-chip instagramFill" onClick={() => {
                    openInNewTab(props.social.link);
                }} >
                    <AiOutlineInstagram />
                    {props.social.name}
                </div>
                : <></>
            }
            {props.social.platform === "discord" ?
                <div className="mt-social-chip discordFill" onClick={() => {
                    openInNewTab(props.social.link);
                }} >
                    <FaDiscord />
                    {props.social.name}
                </div>
                : <></>
            }
        </div>
    );
}

export default Social;