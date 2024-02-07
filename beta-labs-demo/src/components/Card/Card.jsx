import React from "react";
import "../Card/Card.css";

const Card = ({ EventName, Date, Description }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-12 pb-12">
        <div className="flex flex-col items-center justify-center  ">
          <span className="event-name-div">{EventName}</span>
          <span className="date-div">{Date}</span>
        </div>
        <div className="desc-div pl-11">{Description}</div>
        <div className="flex items-center justify-center btn-div">
          <span>REGISTER</span>
        </div>
      </div>
    </>
  );
};

export default Card;
