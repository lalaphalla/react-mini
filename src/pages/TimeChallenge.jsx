import { Grid } from "@mui/joy";
import TimeCard from "../components/TimeCard";
import TimeHeader from "../components/TimeHeader";
import TimePlayer from "../components/TimePlayer";

export default function TimeChallenge() {
    const [open, setOpen] = useState(false)
  return (
    <>
      <TimeHeader />
      <TimePlayer />
      <Grid container spacing={2} sx={{ flexGrow: 1 }}>
        <Grid xs={6}>
          {/* <input type="text" ref={playerName} /> */}
          <TimeCard title="EASY" />
        </Grid>
        <Grid xs={6}>
          <TimeCard title="HARD" />
        </Grid>
      </Grid>
    </>
  );
}
