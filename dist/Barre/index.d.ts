/// <reference types="react" />
import PropTypes from 'prop-types';
declare const Barre: {
    ({ barre, frets, capo, finger, lite }: {
        barre: any;
        frets: any;
        capo: any;
        finger: any;
        lite: any;
    }): JSX.Element;
    propTypes: {
        frets: PropTypes.Requireable<any[]>;
        barre: PropTypes.Requireable<number>;
        capo: PropTypes.Requireable<boolean>;
        lite: PropTypes.Requireable<boolean>;
        finger: PropTypes.Requireable<number>;
    };
};
export default Barre;
