import React from 'react';
import PropTypes from 'prop-types'
import './Spinner.css';

const Spinner = ({small}) => {
    let spinnerSize = '10px';
    if (small) {
        spinnerSize = '2px'
    }
    return (
        <div className="loader" style={{fontSize: spinnerSize}}>
            Loading...
        </div>
    );
}

Spinner.propTypes = {
    small: PropTypes.bool.isRequired
}

export default Spinner;
