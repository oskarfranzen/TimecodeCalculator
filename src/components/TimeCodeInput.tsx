import React from "react"
import { TimeCode } from "../engine/timecodeConstants";

interface TimeCodeInput {
    value: TimeCode
    onChange: (newValue: TimeCode) => void
}

export const TimecodeInput: React.FC<TimeCodeInput> = ({ onChange, value }) => {
    const inputStyle: React.CSSProperties = {
        border: 'none',
        background: 'transparent',
        fontSize: '3em',
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        zIndex: 1,
        color: 'transparent'
    }

    const onInputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value

        var formattedValue = newValue.replace(/\D/g, '');

        onChange({
            hours: formattedValue.slice(0, 2),
            minutes: formattedValue.slice(2, 4),
            seconds: formattedValue.slice(4, 6),
            frames: formattedValue.slice(6, 8)
        })
    }

    const createInputValue = () => Object.entries(value).filter(([, value]) => !!value).map(([, value]) => value).join('');

    return <div style={{ position: 'relative' }}>

        <input type='text'
            style={inputStyle}
            onChange={onInputChanged}
            value={createInputValue()}
            pattern="\D"
        />
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} >
            <div style={{ fontSize: inputStyle.fontSize }}>{value.hours || 'HH'}</div>
            <div style={{ fontSize: inputStyle.fontSize }}>;</div>
            <div style={{ fontSize: inputStyle.fontSize }}>{value.minutes || 'MM'}</div>
            <div style={{ fontSize: inputStyle.fontSize }}>;</div>
            <div style={{ fontSize: inputStyle.fontSize }}>{value.seconds || 'SS'}</div>
            <div style={{ fontSize: inputStyle.fontSize }}>:</div>
            <div style={{ fontSize: inputStyle.fontSize }}>{value.frames || 'FF'}</div>
        </div>
    </div>
}