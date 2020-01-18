import React from 'react';
import Instrument from 'chords-db/dist/db/instrument';
interface ChordProps {
    note: string;
    instrument: Instrument;
    suffix?: string;
    lite?: boolean;
    position?: number;
}
declare const Chord: React.FC<React.PropsWithChildren<ChordProps>>;
export declare const instruments: {
    guitar: Instrument;
    ukulele: Instrument;
};
export default Chord;
