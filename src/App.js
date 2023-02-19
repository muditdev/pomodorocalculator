import "./styles.css";
import { useState } from "react";
import { getWorkingHrs } from "./api";
export default function App() {
  const [totalWorkingHrs, setTotalWorkingHrs] = useState();
  const [deep, setDeep] = useState(0);
  const [shallow, setShallow] = useState(0);
  const calculateHrs = async (e) => {
    e.preventDefault();
    const hrs = await getWorkingHrs({
      deep,
      shallow
    });
    const { deep: deephrs, shallow: shallowhrs, total } = hrs;
    setTotalWorkingHrs(total);
  };
  return (
    <div className="App">
      <h1>POMODORO Hours Calculator</h1>
      <form onSubmit={calculateHrs}>
        <div>
          <label>Deep hours</label>
          <input
            value={deep}
            onChange={(e) => setDeep(e.target.value)}
            type="number"
          />
        </div>
        <div>
          <label>Shallow hours</label>
          <input
            onChange={(e) => setShallow(e.target.value)}
            type="number"
            value={shallow}
          />
        </div>
        <button type="submit"> Calculate </button>
      </form>
      <h2>{totalWorkingHrs}</h2>
    </div>
  );
}
