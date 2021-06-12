import React from "react";
import "./popular.css";
import imgage from "../../assets/music.jpg";
import play from "../../assets/play.svg";
import heart from '../../assets/heart.svg'
import heartNot from '../../assets/like.svg'
function PopularItem({fav}) {
  return (
    <div className="popularItem">
      <section className="sectionPopular">
        <div>01</div>
        <img width="40px" height="40px" src={imgage} alt="" />
        <img width="15px" height="15px" src={play} alt="" />
        <div>ABC EFG</div>
      </section>

      <div className="sectionPopular2">
        <div className="sectionPopular3">
          <div>Shawn Music</div>
          <div>3:30</div>
          <div>
            
          </div>
        </div>
      </div>
      <img style={{paddingRight:'1rem'}}  width="46px" height="46px" src={fav?heart:heartNot} alt="" />
    </div>
  );
}

export default PopularItem;
