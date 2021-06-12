import React from "react";
import "./header.css";
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
function Header() {
  return (
    <div className="headerTop">
      <div className="serchBar">
        <input className="serchBarInput" placeholder="Serch Here" />
      </div>
      <div className='notSet'>
        {/* <div>
          <a href="" className="notif">
            <span className="num">2</span>
          </a>
        </div> */}
                <div className='settingsIcon'>
            < NotificationsNoneOutlinedIcon />
        </div>
        <div className='settingsIcon'>
            < SettingsOutlinedIcon />
        </div>
<div className='getAppTop'>
        <div className='getApp'>
            Get App
        </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
