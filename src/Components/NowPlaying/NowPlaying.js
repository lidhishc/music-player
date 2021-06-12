import React from "react";
import "./nowplaying.css";
import album from "../../assets/music.jpg";
import PauseCircleOutlineRoundedIcon from '@material-ui/icons/PauseCircleOutlineRounded';
import FastForwardRoundedIcon from '@material-ui/icons/FastForwardRounded';
import FastRewindRoundedIcon from '@material-ui/icons/FastRewindRounded';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded';
function NowPlaying() {
  return (
    <div style={{ width: "100%" }}>
    
      <div className="nowplayingTitle">Now Playing</div>
      <div>55 Item on the list</div>
      <div className="nowPlaying">
        <div className="cardNowPlaying">
          <img className="albumImg" src={album} alt="" />
          <div className='ablumTitlePlay'>ABC EFG</div>
          <div className='ablumSubTitlePlay'>Shown Morfy</div>
          <div className="slider">
            <input type="range" min="1" max="100" value="30" />
            <div className="durations">
              <div>1:30</div>
              <div>-2:30</div>
            </div>
          </div>
        </div>
        <div className="PlayerControls">
            <ShuffleRoundedIcon style={{width:'2.5rem',height:'2.5rem',fill:'grey'}}/>
            <FastRewindRoundedIcon style={{width:'2.5rem',height:'2.5rem',fill:'grey'}}/>
            <PauseCircleOutlineRoundedIcon style={{width:'6rem',height:'6rem',fill:'blue'}} />
            <FastForwardRoundedIcon style={{width:'2.5rem',height:'2.5rem',fill:'grey'}} />
            <RepeatRoundedIcon style={{width:'2.5rem',height:'2.5rem',fill:'grey'}} />
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;
