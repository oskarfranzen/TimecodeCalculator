export type TimeCode = { hours: string, minutes: string, seconds: string, frames: string }

const timecodeDelimiters = [';', ':'];

export const isDelimiterCharacter = (character: string) => timecodeDelimiters.findIndex(delimiter => character === delimiter) !== -1
