import React from 'react';
import PropTypes from 'prop-types';

/*
    DataDisplay is a functional React component repsonsible for displaying JSON data.
*/
const DataDisplay = ({ data }) => {
    let prettied = JSON.stringify(data, null, 4);
    return (
        <div>
            <h2>Data</h2>
            <pre>{prettied}</pre>
        </div>
    );
}

DataDisplay.propTypes = {
    data: PropTypes.object
}

export default DataDisplay;