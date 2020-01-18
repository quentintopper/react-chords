/// <reference types="react" />
import PropTypes from 'prop-types';
declare const Neck: {
    ({ tuning, frets, strings, fretsOnChord, baseFret, capo, lite }: {
        tuning: any;
        frets: any;
        strings: any;
        fretsOnChord: any;
        baseFret: any;
        capo: any;
        lite: any;
    }): JSX.Element;
    propTypes: {
        tuning: PropTypes.Requireable<any[]>;
        frets: PropTypes.Requireable<any[]>;
        capo: PropTypes.Requireable<boolean>;
        strings: PropTypes.Validator<number>;
        baseFret: PropTypes.Requireable<number>;
        fretsOnChord: PropTypes.Validator<number>;
        lite: PropTypes.Requireable<boolean>;
    };
    defaultProps: {
        baseFret: number;
        lite: boolean;
    };
};
export default Neck;
