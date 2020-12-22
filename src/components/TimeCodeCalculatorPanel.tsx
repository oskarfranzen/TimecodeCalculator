import React, { useMemo, useState } from 'react'
import { TimeCode } from '../engine/timecodeConstants';
import createTimeCodeCalculator from '../engine/timecodeCalculator'
import { TimecodeInput } from './TimeCodeInput'
import { Grid, MenuItem, Select } from '@material-ui/core';

export const TimeCodeCalculatorPanel = () => {
    const framesPerSecondOptions = [25, 30, 60];

    const [framesPerSecond, setFramesPerSecond] = useState(framesPerSecondOptions[0]);
    const [base, setBaseInput] = useState({} as TimeCode)
    const [compare, setCompareInput] = useState({} as TimeCode)

    const calculator = useMemo(() => createTimeCodeCalculator(framesPerSecond), [framesPerSecond]);

    const onBaseInputChanged = (newValue: TimeCode) => {
        setBaseInput(newValue);
    }

    const onCompareInputChanged = (newValue: TimeCode) => {
        setCompareInput(newValue);
    }

    return <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item>
            <span>Frames per second: </span>
            <Select onChange={(event) => setFramesPerSecond(event.target.value as number)} value={framesPerSecond}>
                {framesPerSecondOptions.map(fps => <MenuItem key={fps} value={fps}>{fps}</MenuItem>)}
            </Select>
        </Grid>
        <Grid item>
            <TimecodeInput value={base} onChange={onBaseInputChanged} />
        </Grid>
        <Grid item>
            <TimecodeInput value={compare} onChange={onCompareInputChanged} />
        </Grid>
        <Grid item>
            {calculator.getTimeStampDifference(base, compare)}
        </Grid>
    </Grid>
}