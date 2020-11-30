import Filters from './Filters';
import MapDiv from './Map';
import * as API from './API';
import React from 'react';

class TopMap extends React.Component {
  state = {
    meteorites: [],
  };

  componentDidMount() {
    API.fetchMeteorites().then((data) => {
      this.setState({
        meteorites: data,
      });
    });
  }

  render() {
    return (
      <div>
        <Filters />
        <MapDiv data={this.state.meteorites} />
      </div>
    );
  }
}

export default TopMap;
