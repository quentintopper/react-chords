import React from 'react';
import PropTypes from 'prop-types';
var offsets = {
    4: {
        x: 10,
        y: 10,
        length: 40
    },
    6: {
        x: 0,
        y: 0,
        length: 50
    }
};
var getNeckHorizonalLine = function (pos, strings) {
    return "M " + offsets[strings].x + " " + 12 * pos + " H " + offsets[strings].length;
};
var getNeckVerticalLine = function (pos, strings) {
    return "M " + (offsets[strings].y + pos * 10) + " 0 V 48";
};
var getNeckPath = function (strings, fretsOnChord) {
    return Array.apply(null, Array(fretsOnChord + 1)).map(function (_, pos) { return getNeckHorizonalLine(pos, strings); }).join(' ').concat(Array.apply(null, Array(strings)).map(function (_, pos) { return getNeckVerticalLine(pos, strings); }).join(' '));
};
var getBarreOffset = function (strings, frets, baseFret, capo) {
    return strings === 6
        ? frets[0] === 1 || capo ? (baseFret > 9 ? -12 : -11) : (baseFret > 9 ? -10 : -7)
        : frets[0] === 1 || capo ? (baseFret > 9 ? -1 : 0) : (baseFret > 9 ? 3 : 4);
};
var Neck = function (_a) {
    var tuning = _a.tuning, frets = _a.frets, strings = _a.strings, fretsOnChord = _a.fretsOnChord, baseFret = _a.baseFret, capo = _a.capo, lite = _a.lite;
    return React.createElement("g", null,
        React.createElement("path", { stroke: '#444', strokeWidth: '0.25', strokeLinecap: 'square', d: getNeckPath(strings, fretsOnChord) }),
        baseFret === 1
            ? React.createElement("path", { stroke: '#444', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round', d: "M " + offsets[strings].x + " 0 H " + offsets[strings].length })
            : React.createElement("text", { fontSize: '0.25rem', fill: '#444', fontFamily: 'Verdana', x: getBarreOffset(strings, frets, baseFret, capo), y: '8' },
                baseFret,
                "fr"),
        !lite &&
            React.createElement("g", null, tuning.slice().map(function (note, index) {
                return React.createElement("text", { key: index, fontSize: '0.3rem', fill: '#444', fontFamily: 'Verdana', textAnchor: 'middle', x: offsets[strings].x + index * 10, y: '53' }, note);
            })));
};
Neck.propTypes = {
    tuning: PropTypes.array,
    frets: PropTypes.array,
    capo: PropTypes.bool,
    strings: PropTypes.number.isRequired,
    baseFret: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]),
    fretsOnChord: PropTypes.number.isRequired,
    lite: PropTypes.bool
};
Neck.defaultProps = {
    baseFret: 1,
    lite: false
};
export default Neck;
