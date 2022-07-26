import React, { useState, useEffect } from "react";
import "./Card.css";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

const Card = ({ index, imageId, openCardsArr, setOpenCardsArr }) => {
  const [unhide, setUnhide] = useState(false);

  const handleClick = () => {
    setUnhide(!unhide);
    setOpenCardsArr([...openCardsArr, imageId]);
  };

  useEffect(() => {
    // console.log(openCardsArr);
  }, [unhide]);

  const cardStyle = {
    backgroundColor: unhide ? "white" : "#9CAAF9",
  };

  return (
    <div className="card" style={cardStyle} onClick={handleClick}>
      {unhide ? (
        // <img src={require("../../media/Ironman.jpg")} alt="" />
        <h1>{imageId}</h1>
      ) : (
        <QuestionMarkIcon className="qMark" />
      )}
    </div>
  );
};

export default Card;
