import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectItem } from '../actions';

import DataApp from '../components/DataApp';

/*
    ReduxConnected DataLoader is a higher-order component that relies on Redux state.
    This shows how a redux component would handle similar data loading. Note that none
    of the logic exists in this component. What happens here is that properties are mapped
    to either Redux state or action creators. Then, the connect function wraps the DataApp
    which will apply those properties when it renders.
*/
function mapStateToProps(state) {
    // Set this component's props to the corresponding state values.
    // This could be shortened, but left expanded for clarity.
    return {
        selectedItem: state.selectedItem,
        isLoading: state.isLoading,
        items: state.items,
        data: state.data
    }
}

function mapDispatchToProps(dispatch) {
    // Similar to mapStateToProps, binds the action creators to certain
    // props of this component.
    return bindActionCreators({ onItemSelect: selectItem }, dispatch);
}

// Connects the mapping functions with the component. Since we do not need to do anything
// extra in this component (so don't need the lifecycle methods), we can just wrap the 
// presentational component.
export default connect(mapStateToProps, mapDispatchToProps)(DataApp)