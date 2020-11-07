//import { Chat } from '@material-ui/icons';
import React, {useState,useEffect} from 'react';
import './App.css';
import Video from './Video'
import db from './firebase'
function App() {
   const [video, setvideo] = useState([])
   
   useEffect(() => {
    //this code fires when the app->Component loads
    db.collection('video').onSnapshot(snapshot => {
      setvideo(snapshot.docs.map(doc => doc.data()))
    })
  }, [video])
  return (
    <div className="app">
      <div className="app_video">   
      {video.map(({ url, channel, description, song, likes, comments, share }) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            song={song}
            likes={likes}
            comments={comments}
            share={share}
          />
        )
        )}  
     </div>

    </div>

  );
}

export default App;
