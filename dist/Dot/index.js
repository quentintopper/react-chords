import React from 'react';
import PropTypes from 'prop-types';
var positions = {
    string: [50, 40, 30, 20, 10, 0],
    fret: [-4, 6.5, 18, 30, 42, 54],
    finger: [-3, 8, 19.5, 31.5, 43.5]
};
var offset = {
    4: 0,
    6: -1
};
var getStringPosition = function (string, strings) {
    return positions.string[string + offset[strings]];
};
var radius = {
    open: 2,
    fret: 4
};
var Dot = function (_a) {
    var string = _a.string, fret = _a.fret, finger = _a.finger, strings = _a.strings, lite = _a.lite;
    return fret === -1
        ? React.createElement("text", { fontSize: '0.7rem', fill: '#444', fontFamily: 'Verdana', textAnchor: 'middle', x: getStringPosition(string, strings), y: '-2' }, "x")
        : (React.createElement("g", null,
            React.createElement("circle", { strokeWidth: '0.25', stroke: '#444', fill: fret === 0 ? 'transparent' : '#444', cx: getStringPosition(string, strings), cy: positions.fret[fret], r: fret === 0 ? radius['open'] : radius['fret'] }),
            !lite && finger > 0 &&
                React.createElement("text", { fontSize: '3pt', fontFamily: 'Verdana', textAnchor: 'middle', fill: 'white', x: getStringPosition(string, strings), y: positions.finger[fret] }, finger)));
};
Dot.propTypes = {
    string: PropTypes.number,
    fret: PropTypes.number,
    finger: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
    strings: PropTypes.number.isRequired,
    lite: PropTypes.bool
};
Dot.defaultProps = {
    fret: 0,
    lite: false
};
export default Dot;
