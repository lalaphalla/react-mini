import "./App.css";
import { Route, Routes } from "react-router-dom";
import { TitTacToe } from "./pages/TicTacToe";
import TimeChallenge from "./pages/TimeChallenge";
import DataFetching from "./pages/DataFetching";
function App() {
  return (
    <>
      <Routes path="/" element={<TitTacToe />}>
        <Route path="/" element={<TitTacToe />} />
        <Route path="/tictactoe" element={<TitTacToe />} />
        <Route path="/time-challenge" element={<TimeChallenge />}/>
        <Route path="/data-fetching" element={<DataFetching />}/>
      </Routes>
    </>
  );
}

export default App;
