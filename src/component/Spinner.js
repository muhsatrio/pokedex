import React from 'react';
import './Spinner.css';

const Spinner = (props) => {
    let spinnerSize = '10px';
    if (props.small) {
        spinnerSize = '2px'
    }
    return (
        <div className="loader" style={{fontSize: spinnerSize}}>
            Loading...
        </div>
    );
}

export default Spinner;