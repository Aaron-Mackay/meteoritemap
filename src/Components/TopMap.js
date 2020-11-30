import Filters from './Filters';
import MapDiv from './Map';
import * as API from './API';
import React from 'react';

class TopMap extends React.Component {
    state = {
        meteorites: [],
        filter: null,
        query: null
    };

    componentDidMount() {
        this.submitFilter(this.state.filter, this.state.query);
    }

    render() {
        console.log(this.state, "<<< rendered, state");
        return (
            <div>
                <Filters submitFilter={this.submitFilter} />
                <MapDiv data={this.state.meteorites} />
            </div>
        );
    }

    submitFilter = (filter, query) => {
        this.setState((currState) => {
            const newState = {
                filter: filter,
                query: query
            }
            return newState
        },
            () => {
                API.fetchMeteorites(this.state.filter, this.state.query).then((data) => {
                    this.setState({
                        meteorites: data
                    });
                })
            }
        )
    }
}

export default TopMap;
