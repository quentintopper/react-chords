import React from 'react';
import Neck from './Neck'; 
import Dot from './Dot';
import Barre from './Barre';
import chordsDb from 'chords-db';
import Instrument from 'chords-db/dist/db/instrument';
import { Position } from 'chords-db/dist/db/chords';
import guitar from 'chords-db/dist/guitar.json';
import { number } from 'prop-types';


const onlyDots = (frets: any[] = [], barres: any[] = []) =>
  frets
    .map((fret, index) => ({ position: index, fret: fret }))
    .filter(item => !barres || barres.indexOf(item.fret) === -1)

interface ChordProps {
  note: string,
  instrument: Instrument,
  suffix?: string,
  lite?: boolean,
  position?: number
}

const Chord: React.FC<React.PropsWithChildren<ChordProps>> = ({ instrument, lite, note, suffix, position }) => {
  const _chords: any[] | undefined = guitar['chords'][note];
  if (!_chords) {
    return <div>{note + (suffix ? suffix : '')}</div>;
  }
  let _chord = suffix ? _chords.find((chord) => chord['suffix'] === suffix) : _chords[0];
  _chord = _chord ? _chord : _chords[0];
  const _positions = _chord['positions'];
  const _positionIndex = position ? position : 0;
  const _maybePosition = _positions[_positionIndex]
  const _position = _maybePosition ? _maybePosition : 0;
  const _capo = _position['capo'];
  const _frets = _position['frets'];
  const _baseFret = _position['baseFret'];
  const _fingers = _position['fingers'];
  const _barres = _position['barres'];

  return (
    <svg
      width='100%'
      xmlns='http://www.w3.org/2000/svg'
      preserveAspectRatio='xMinYMin meet'
      viewBox='0 0 80 70'>
      <g
        transform='translate(13, 13)'>
        <Neck
          tuning={instrument.tunings.standard}
          strings={instrument.main.strings}
          frets={_frets}
          capo={_capo}
          fretsOnChord={instrument.main.fretsOnChord}
          baseFret={_baseFret}
          lite={lite}
        />

        {_barres && _barres.map((barre, index) =>
          <Barre
            key={index}
            capo={index === 0 && _capo}
            barre={barre}
            finger={_fingers && _fingers[_frets.indexOf(barre)]}
            frets={_frets}
            lite={lite}
          />)}

        {onlyDots(_frets, _barres).map(({position, fret}) => (
          <Dot
            key={position}
            string={instrument.main.strings - position}
            fret={fret}
            strings={instrument.main.strings}
            finger={_fingers && _fingers[position]}
            lite={lite}
          />
        ))}
      </g>
    </svg>
  );
}

export const instruments = chordsDb;

export default Chord;
