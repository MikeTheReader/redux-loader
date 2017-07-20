import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import DataApp from '../components/DataApp';

/*
    DataLoader is a container component that relies entirely on component state (no Redux state is used at all).
    This shows how a generic component can handle promise / delayed responses and data loading.
*/
export default class DataLoader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'one',
            isLoading: true,
            data: null,
            items: ['one', 'two', 'three']
        };
    }

    componentDidMount() {
        this.onLoaderItemSelect(this.state.selectedItem);
    }

    onLoaderItemSelect = (item) => {
        this.setState({
            selectedItem: item,
            isLoading: true,
            data: null
        });
        setTimeout(() => this.fetchData(item), 3000); // Add a 3 second delay to mimic slow network
    }

    fetchData = (item) => {
        fetch(`${process.env.PUBLIC_URL}/data/${item}.json`).then((response) => {
            return response.json();
        }).then((json) => {
            this.setState({
                isLoading: false,
                data: json.data
            })
        })
    }

    render() {
        return <DataApp isLoading={this.state.isLoading}
            selectedItem={this.state.selectedItem}
            items={this.state.items}
            onItemSelect={this.onLoaderItemSelect}
            data={this.state.data} />;
    }
}
