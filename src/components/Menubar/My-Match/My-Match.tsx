// import axios from "axios";
import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";

const MyMatch = () => {
  const videoList = ["KXWfl3dy4uQ", "xrP-PSdtuvk", "RWzTg_SZ4Qc", "7u0cVfs0RGQ", "E9kN1qe3z7Q", "waMu_ySU-SI", "7xZ5wAKexNA", "EDQyrJeQkDY", "QC2Awg0ZAj8", "Ujt9XtIRJNA"];
  // const [videoList, setvideoList] = useState([]);

  // async function getMyVideos() {
  //   await axios.post("http://localhost:8890/common/fetchYtVid", {
  //     "user": "cranky"
  //   }, {
  //     withCredentials: true,
  //   })
  //     .then((res) => setvideoList(res.data));
  // }
  // useEffect(() => {
  //   getMyVideos();
  // }, []);

  return (
    <>
    {/* <YoutubeEmbed embedId={videoList[0]} /> */}
      {videoList.map(video => {
        return <YoutubeEmbed key={video} embedId={video} />;
      })}
    </>
  );
};

export default MyMatch;
