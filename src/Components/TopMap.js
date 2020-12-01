import Filters from './Filters';
import MapDiv from './Map';
import * as API from './API';
import React from 'react';

class TopMap extends React.Component {
  state = {
    meteorites: [],
    filter: null,
    query: null,
    limit: null,
  };

  componentDidMount() {
    API.fetchMeteorites(this.state.filter, this.state.query).then((data) => {
      this.setState({
        meteorites: data,
      });
    });
  }
  componentDidUpdate() {}
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
        API.fetchMeteorites(
          this.state.filter,
          this.state.query,
          this.state.limit
        ).then((data) => {
          this.setState({
            meteorites: data,
          });
        });
      }
    );
  };
}

export default TopMap;
