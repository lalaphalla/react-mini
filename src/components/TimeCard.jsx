import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/joy";
import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

// const useStyle = styled((theme)=>(
//     {
//         card: {
//             backgroundColor: theme.palete
//         }
// )
// })

export default function TimeCard({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  // const timeIsActive = timeRemaining > 0 && timeRemaining < (targetTime * 1000);
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000
  const [open, setOpen] = useState(false);
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    console.log('first')
    // setTimeRemaining(targetTime * 1000)
    !open && setOpen(true)
  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(
        (prevTimeRemaining) => prevTimeRemaining && prevTimeRemaining - 10
      );
    }, 10);

  }
  function handleStop() {
    setOpen(true);
    clearInterval(timer.current);
  }
  function handleShow() {
    setOpen(false);
  }
  function handleReset(params) {
    setTimeRemaining(targetTime * 1000)
  }
  const card = (
    <>
      <CardContent sx={{ backgroundColor: "white", spacing: 1 }}>
        <Typography variant="h4">{title}</Typography>
        <Typography variant="outlined" sx={{ mb: 6 }}>
          {targetTime} second
        </Typography>
        <CardActions>
          <Button
            onClick={timeIsActive ? handleStop : handleStart}
            sx={{ backgroundColor: "green" }}
          >
            {timeIsActive ? "Stop" : "Start"}
          </Button>
        </CardActions>
        <Typography>
          {timeIsActive ? "Timer is Running" : "Timer inactive"}
        </Typography>
      </CardContent>
    </>
  );
  return (
    <>
      <ResultModal
        remainingTime={timeRemaining}
        reset={handleReset}
        open={open}
        handleShow={handleShow}
        targetTime={targetTime}
      />
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  );
}
