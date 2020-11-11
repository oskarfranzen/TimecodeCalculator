import React, { useMemo, useState } from 'react';
import './App.css';
import getTimecodeCalculator from './engine/timecodeCalculator'

const App: React.FC = () => {

  const [framesPerSecond, setFramesPerSecond] = useState(24);
  const [first, setfirst] = useState('')
  const [second, setSecond] = useState('')

  const calculator = useMemo(() => getTimecodeCalculator(framesPerSecond), [framesPerSecond]);

  return (
    <div>
      <select onChange={(event) => setFramesPerSecond(parseInt(event.target.value))} value={framesPerSecond}>
        <option value='24'>24</option>
        <option value='30'>30</option>
        <option value='60'>60</option>
      </select>
      <input type='text' value={first} onChange={(event) => setfirst(event.currentTarget.value)} />
      <input type='text' value={second} onChange={(event) => setSecond(event.currentTarget.value)} />
      {calculator.validateTimestamp(first) && calculator.validateTimestamp(second) &&
        calculator.getTimeStampDifference(first, second)}
    </div >
  );
}

export default App;
