import React, { useRef,useState } from "react";
import "./Video.css";
import Video_footer from "./Video_footer"
import Video_Sidebar from "./Video_Sidebar"
function Video(
  {url,channel,song, description, likes,comments,share}
) {
  const videoRef = useRef(null);
  const [play, setpaly] = useState(false)
  const handlePlayVid = () =>{
    if(play){
      videoRef.current.pause();
      setpaly(false);
    }
    else {
      videoRef.current.play();
      setpaly(true);
    }
  };
  return (
    <div className="video">
      <video
         className="video__player"
         loop
         onClick={handlePlayVid}
         ref={videoRef}
         src={url}
      ></video>
      <Video_footer
           channel = {channel}
           description = {description}
           song = {song} /> 
      <Video_Sidebar 
          likes = {likes}
          comments = {comments}
          share = {share}
      />
    </div>
  );
}

export default Video;
