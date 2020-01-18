/// <reference types="react" />
import PropTypes from 'prop-types';
declare const Dot: {
    ({ string, fret, finger, strings, lite }: {
        string: any;
        fret: any;
        finger: any;
        strings: any;
        lite: any;
    }): JSX.Element;
    propTypes: {
        string: PropTypes.Requireable<number>;
        fret: PropTypes.Requireable<number>;
        finger: PropTypes.Requireable<number>;
        strings: PropTypes.Validator<number>;
        lite: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        fret: number;
        lite: boolean;
    };
};
export default Dot;
