import { Grid } from "@mui/joy";
import TimeCard from "../components/TimeCard";
import TimeHeader from "../components/TimeHeader";
import TimePlayer from "../components/TimePlayer";
import { useState } from "react";

export default function TimeChallenge() {
  return (
    <>
      <TimeHeader />
      <TimePlayer />
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={6}>
          {/* <input type="text" ref={playerName} /> */}
          <TimeCard title="EASY" targetTime={1} />
        </Grid>
        <Grid xs={6}>
          <TimeCard title="HARD" targetTime={5} />
        </Grid>
      </Grid>
    </>
  );
}
