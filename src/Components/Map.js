import React from "react";
import * as API from "./API"

class Map extends React.Component {
    locations = this.props.data.map(meteorite => {
        return [meteorite.geolocation.latitude, meteorite.geolocation.longitude]
    })

    render() {
        console.log(this.props);
        console.log(this.locations);
        return (
            <div>
                Map
            </div>
        )
    }


}

export default Map