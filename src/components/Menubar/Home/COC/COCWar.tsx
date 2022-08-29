import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../../Shared/Loading";

function COCWar() {

    const [war, setWar] = useState({} as any);

    useEffect(() => {
        async function getMyWar() {
            return await axios.post("https://mysterious-beyond-28283.herokuapp.com/common/fetchCurrentWarDetails", {
                "clan": "ckzo"
            }, {
                withCredentials: true,
            })
                .then((res: any) => {
                    console.log(res.data);
                    setWar(res.data.clanWar);
                });
        }
        getMyWar();
    }, []);

    if(war.state) {
        return (
            <div className="bgCoc">
                <div className="cocWar">
                    <div className="title">
                       Coming Soon
                    </div>
                </div>
            </div>
        );
    } else {
        return <>
            <Loading />
        </>;
    }

}

export default COCWar;