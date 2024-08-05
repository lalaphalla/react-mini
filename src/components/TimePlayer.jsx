import { Button, Grid, Input, Typography } from "@mui/joy";
import { useRef, useState } from "react";

export default function TimePlayer() {
  // const [submitted, setSubmitted] = useState(false)
  const playerName = useRef(null);
  const [enterPlayerName, setEnterPlayerName] = useState(null);
//   function handleOnChange(event) {
//     // setSubmitted(false)
//     setEnterPlayerName(event.target.value);
//   }
  function handleClick() {
    // setSubmitted(true)
    console.log(playerName.current.value);
    setEnterPlayerName(playerName.current.value)
  }
  return (
    <section>
      <Typography level="h2" color="neutral">
        Welcome {enterPlayerName ?? "unkown entity"} to our Challenge Game
      </Typography>
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={8}>
            {/* <input type="text" ref={playerName} value={enterPlayerName}/> */}
          <Input
            slotProps={{
              input: {
                ref: playerName,
              },
            }}
          />
        </Grid>
        <Grid xs={4}>
          <Button fullWidth="true" onClick={handleClick}>
            Set Player
          </Button>
        </Grid>
      </Grid>
    </section>
  );
}
