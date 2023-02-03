import "./BusinessCard.css";
import  posterGirl  from "../images/postergirl.avif"

export const BusinessCard = () => {
  return (
    <div id="businessDiv">
      <div id="businessContent">
        <div id="recordWord">
          <p>Best Business Platform - World Record 2021</p>
        </div>
        <div id="goalWord">
          <p>Reach Your Business Goal in Record Time</p>
        </div>
        <div id="middleText">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab
            qui, quis molestias sequi ipsam dignissimos, reiciendis voluptate,
            voluptatem veniam alias ipsa id accusamus facilis similique.
          </p>
        </div>
        <div id="BtnAnchor">
            <div><button id="getBtn">Get Started</button></div>
            <div id="anchorText"><a href="/" id="anchorTag">Book a 30 Mins Quick Meeting </a></div>
        </div>
      </div>
      <div id="posterGirl">
        <div>
            <img id="posterImg" src={posterGirl} alt="" />
        </div>
      </div>
    </div>
  );
};
