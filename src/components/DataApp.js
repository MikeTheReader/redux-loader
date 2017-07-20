import React from 'react';
import DataDisplay from './DataDisplay';
import DataSelector from './DataSelector';
import PropTypes from 'prop-types';

/*
    DataApp is a functional react component that handles displaying both Data Selection buttons as well
    as the actual data (or a loading message if the data is loading).
*/
const DataApp = ({ items, selectedItem, isLoading, data, onItemSelect }) => {
    let display = (isLoading) ?
        <div>Loading....</div> :
        <DataDisplay data={data} />;

    return (
        <div>
            <DataSelector onItemSelect={onItemSelect} items={items} selectedItem={selectedItem} isLoading={isLoading} />
            <div style={{ textAlign: 'left' }}>
                {display}
            </div>
        </div>
    );
}

DataApp.propTypes = {
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.object,
    onItemSelect: PropTypes.func.isRequired
}

export default DataApp;