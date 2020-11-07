import React, { useState } from 'react'
import "./Video_sidebar.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import pink from "@material-ui/core/colors/pink";
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
function Video_Sidebar({likes,comments,share}) {
    const [liked, setliked] = useState(false);
    return (
        <div className="video_sidebar">
            <div className="likes">
                {liked ?
                <FavoriteIcon fontSize="large" className="favourite_icon" style={{ color: pink[500] }} onClick = {e => setliked(false)}/>
                :
                <FavoriteBorderIcon  fontSize="large" className="favourite_icon" onClick = {e => setliked(true)}/>
                 
                }
                <p>{ liked ?  likes+1  : likes }</p>
            </div>
            
            <div className="comments"> 
                <CommentIcon fontSize="large" className="comment_icon" />
                <p>{comments}</p>
             </div>
           
            <div className="share">
                <ShareRoundedIcon fontSize="large" className="share_icon" />
                <p>{share}</p>
            </div>

        </div>
    )
}

export default Video_Sidebar