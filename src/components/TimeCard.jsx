import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/joy";
import { useRef, useState } from "react";

// const useStyle = styled((theme)=>(
//     {
//         card: {
//             backgroundColor: theme.palete   
//         }
// )
// })

export default function TimeCard({ title }) {

  const timer = useRef();

  const [timerExpired, setTimerExpired] = useState(false)
  const [timerStarted, setTimerStarted] = useState(false)
  function handleStart(){
    timer.current =setTimeout(()=>{
        setTimerExpired(true)
    }, )
  }

  const card = (
    <>
      <CardContent 
        sx={{ backgroundColor: "white", spacing: 1 }}
      >
        <Typography variant="h4">
          {title}
        </Typography>
        <Typography variant="outlined"  sx={{ mb: 6 }}>1 second</Typography>
        <CardActions>
          <Button sx={{backgroundColor: 'green', }}>Start Challenge</Button>
        </CardActions>
        <Typography>Timer inactive</Typography>
      </CardContent>
    </>
  );
  return (
    <>
      <Box sx={{ minWidth: 275 }}>
        <Card variant="outlined">{card}</Card>
      </Box>
    </>
  );
}
