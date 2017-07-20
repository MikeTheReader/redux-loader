import React from 'react';
import PropTypes from 'prop-types';

/*
    DataSelector is a functional React component that handles the buttons used for selecting an item.
*/
const DataSelector = ({ items, selectedItem, onItemSelect, isLoading = false }) => {

    const renderSingleItemButton = (item, index, selectedItem) => {
        let classes = (item === selectedItem) ? 'active' : '';
        return (
            <div style={{ display: 'inline-block', marginRight: '10px' }} key={index}>
                <button disabled={isLoading} className={classes} onClick={() => onItemSelect(item)}>{item}</button>
            </div>
        )
    }

    let itemButtons = items.map((item, index) => renderSingleItemButton(item, index, selectedItem));

    return (
        <div>
            {itemButtons}
        </div>
    );
}

DataSelector.propTypes = {
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func.isRequired,
    isLoading: PropTypes.bool
}

export default DataSelector;