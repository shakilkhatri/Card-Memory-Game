import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "../Card/Card";
import "./Container.css";

export default function Container() {
  const [openCardsArr, setOpenCardsArr] = useState([]);
  const [curPlayer, setCurPlayer] = useState(1);
  const [scoreP1, setScoreP1] = useState(0);
  const [scoreP2, setScoreP2] = useState(0);

  const indexArr = [];
  let randomArr = [];

  for (let i = 0; i < 30; i++) {
    indexArr.push(i);
  }
  for (let i = 0; i < 15; i++) {
    randomArr.push(i);
    randomArr.push(i);
  }

  // useEffect(() => {}, []);

  /* Durstenfeld shuffle algorithm */
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  shuffleArray(randomArr);

  return (
    <Box className="Box">
      <Grid container spacing={2} className="gridContainer">
        {indexArr.map((i) => (
          <Grid item xs={2} key={i}>
            <Card
              index={i}
              imageId={randomArr[i]}
              openCardsArr={openCardsArr}
              setOpenCardsArr={setOpenCardsArr}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
