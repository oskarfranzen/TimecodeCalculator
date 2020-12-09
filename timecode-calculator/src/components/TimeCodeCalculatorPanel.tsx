import React, { useMemo, useState } from 'react'
import { TimeCode } from '../engine/timecodeConstants';
import createTimeCodeCalculator from '../engine/timecodeCalculator'
import { TimecodeInput } from './TimeCodeInput'
import { Grid, MenuItem, Select } from '@material-ui/core';

export const TimeCodeCalculatorPanel = () => {
    const [framesPerSecond, setFramesPerSecond] = useState(24);
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
            <Select onChange={(event) => setFramesPerSecond(event.target.value as number)} value={framesPerSecond}>
                <MenuItem value={24}>24</MenuItem>
                <MenuItem value={30}>30</MenuItem>
                <MenuItem value={60}>60</MenuItem>
            </Select>
        </Grid>
        <Grid item>
            <TimecodeInput value={base} onChange={onBaseInputChanged} />
        </Grid>
        <Grid item>
            <TimecodeInput value={compare} onChange={onCompareInputChanged} />
        </Grid>
        {calculator.getTimeStampDifference(base, compare)}
    </Grid>
}