import React from "react";

class Filters extends React.Component {
    render() {
        return (
            <div>
                Filters <br />
                <select name="filter" id="filter">
                    <option value="name">Name</option>
                    <option value="year">Year</option>
                    <option value="mass">Mass</option>
                </select><br />
                <input type="text" id="query" /><br />
            </div>)
    }
}

export default Filters