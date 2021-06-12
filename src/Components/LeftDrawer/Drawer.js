import React from "react";
import Profile from "./Profile";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import PhotoAlbumOutlinedIcon from '@material-ui/icons/PhotoAlbumOutlined';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
function DrawerTwo() {
  return (
    <div className="drawerSection">
      <div className="profile">
        <Profile />
      </div>
      <br />
      <br />
      <div className='topItems'>
        <div className="items">
          <HomeOutlinedIcon className="icons"/>
          <span className="ItemName">Home</span>
        </div>

        <div className="items">
          <AppsRoundedIcon className="icons"/>
          <span className="ItemName">Browse</span>
        </div>
        <div className="items">
          <PhotoAlbumOutlinedIcon className="icons"/>
          <span className="ItemName">Album</span>
        </div>
        <div className="items">
          <PersonOutlineRoundedIcon className="icons"/>
          <span className="ItemName">Artist</span>
        </div>
        <div className="items">
          <VideocamOutlinedIcon className="icons"/>
          <span className="ItemName">Videos</span>
        </div>
        <div
          style={{
            margin: "3rem 0 1rem 2rem ",
            fontFamily: "sans-serif",
            opacity: "0.6",
            fontWeight: "900",
          }}
        >
          MY MUSIC
        </div>
        <div>
        <div className="items">
          <PersonOutlineRoundedIcon className="icons"/>
          <span className="ItemName">Artist</span>
        </div>
        <div className="items">
          <VideocamOutlinedIcon className="icons"/>
          <span className="ItemName">Videos</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DrawerTwo;
