import Filters from './Filters';
import MapDiv from './Map';
import * as API from './API';
import React from 'react';

class TopMap extends React.Component {
    state = {
        meteorites: [],
        filter: "name",
        query: null,
        limit: 5,
    };

    componentDidMount() {
        const savedState = JSON.parse(localStorage.getItem("state"));
        this.setState(savedState);
    }

    componentDidUpdate() { }
    render() {
        return (
            <div>
                <Filters submitFilter={this.submitFilter} />
                <MapDiv data={this.state.meteorites} />
            </div>
        );
    }

    submitFilter = (filter, query, limit) => {
        this.setState(
            (currState) => {
                const newState = {
                    filter: filter,
                    query: query,
                    limit: limit,
                };
                return newState;
            },
            () => {
                console.log(this.state);
                API.fetchMeteorites(
                    this.state.filter,
                    this.state.query,
                    this.state.limit
                ).then((data) => {
                    this.setState({
                        meteorites: data,
                    }, () => {
                        localStorage.setItem('state', JSON.stringify(this.state))
                    });
                });
            }
        );
    };
}

export default TopMap;
