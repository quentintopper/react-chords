import React from 'react';
import Neck from './Neck';
import Dot from './Dot';
import Barre from './Barre';
import chordsDb from 'chords-db';
import guitar from 'chords-db/dist/guitar.json';
var onlyDots = function (frets, barres) {
    if (frets === void 0) { frets = []; }
    if (barres === void 0) { barres = []; }
    return frets
        .map(function (fret, index) { return ({ position: index, fret: fret }); })
        .filter(function (item) { return !barres || barres.indexOf(item.fret) === -1; });
};
var Chord = function (_a) {
    var instrument = _a.instrument, lite = _a.lite, note = _a.note, suffix = _a.suffix, position = _a.position;
    var _chords = guitar['chords'][note];
    if (!_chords) {
        return React.createElement("div", null, note + (suffix ? suffix : ''));
    }
    var _chord = suffix ? _chords.find(function (chord) { return chord['suffix'] === suffix; }) : _chords[0];
    _chord = _chord ? _chord : _chords[0];
    var _positions = _chord['positions'];
    var _positionIndex = position ? position : 0;
    var _maybePosition = _positions[_positionIndex];
    var _position = _maybePosition ? _maybePosition : 0;
    var _capo = _position['capo'];
    var _frets = _position['frets'];
    var _baseFret = _position['baseFret'];
    var _fingers = _position['fingers'];
    var _barres = _position['barres'];
    return (React.createElement("svg", { width: '100%', xmlns: 'http://www.w3.org/2000/svg', preserveAspectRatio: 'xMinYMin meet', viewBox: '0 0 80 70' },
        React.createElement("g", { transform: 'translate(13, 13)' },
            React.createElement(Neck, { tuning: instrument.tunings.standard, strings: instrument.main.strings, frets: _frets, capo: _capo, fretsOnChord: instrument.main.fretsOnChord, baseFret: _baseFret, lite: lite }),
            _barres && _barres.map(function (barre, index) {
                return React.createElement(Barre, { key: index, capo: index === 0 && _capo, barre: barre, finger: _fingers && _fingers[_frets.indexOf(barre)], frets: _frets, lite: lite });
            }),
            onlyDots(_frets, _barres).map(function (_a) {
                var position = _a.position, fret = _a.fret;
                return (React.createElement(Dot, { key: position, string: instrument.main.strings - position, fret: fret, strings: instrument.main.strings, finger: _fingers && _fingers[position], lite: lite }));
            }))));
};
export var instruments = chordsDb;
export default Chord;
