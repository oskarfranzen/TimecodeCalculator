export default (framesPerSecond: number) => {
    const framesPerMinute = framesPerSecond * 60;
    const framesPerHour = framesPerMinute * 60;

    const getTotalFrames = (timeStamp: string) => {
        const matches = timeStamp.match(/^(\d\d);(\d\d);(\d\d);(\d\d)$/);
        if (!matches || matches.length !== 5) {
            throw new Error('Please enter a timestamp in format : HH;MM;SS;FF')
        }

        const [hours, minutes, seconds, frames] = matches.slice(1).map(match => parseInt(match));

        return (frames + (seconds * framesPerSecond) + (minutes * framesPerMinute) + (hours * framesPerHour));
    }

    const validateTimestamp = (timeStamp: string) => {
        try {
            getTotalFrames(timeStamp)
            return true;
        } catch (err) {
            return false;
        }
    }

    const getTimestampParts = (frames: number) => {
        const h = Math.floor(frames / framesPerHour)
        let remain = frames % framesPerHour;

        const m = Math.floor(remain / framesPerMinute)
        remain = frames % framesPerMinute

        const s = Math.floor(remain / framesPerSecond);
        remain = remain % framesPerSecond;

        return { h, m, s, f: remain }
    }

    const getTimeStampDifference = (inputFirst: string, inputSecond: string) => {
        const frameDiff = Math.abs(getTotalFrames(inputFirst) - getTotalFrames(inputSecond));

        const { h, m, s, f } = getTimestampParts(frameDiff);

        return `${h.toString().padStart(2, '0')};${m.toString().padStart(2, '0')};${s.toString().padStart(2, '0')};${f.toString().padStart(2, '0')}`;
    }

    return { getTimeStampDifference, validateTimestamp }
}