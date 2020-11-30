import Filters from "./Filters"
import Map from "./Map"
import * as API from "./API"
import React from "react";

class TopMap extends React.Component {
    state = {
        meteorites: [],
    }

    componentDidMount() {
        API.fetchMeteorites()
            .then(data => {
                this.setState({
                    meteorites: data
                })
            })
    }

    render() {
        return (
            <div>
                <Filters />
                <Map data={this.state.meteorites} />
            </div>
        )

    }
}

export default TopMap