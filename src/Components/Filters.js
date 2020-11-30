import React from 'react';
import * as API from "./API"

class Filters extends React.Component {
    state = {
        filter: null,
        query: null,
    }

    render() {
        return (
            <div>
                Filters <br />
                <form>
                    <select className='filter' name='filter' id='filter' onChange={this.filterHandler}>
                        <option value='name'>Name</option>
                        <option value='year'>Year</option>
                        <option value='mass'>Mass</option>
                    </select>
                    <br />
                    <input className='query' type='text' id='query' onChange={this.queryHandler} />
                    <br />
                    <button onClick={() => {
                        this.props.submitFilter(this.state.filter, this.state.query);
                        console.log("clicked");
                    }}>Search</button>
                </form>

            </div>
        );
    }

    filterHandler = (event) => {
        const newState = {
            filter: event.target.value
        }
        this.setState(newState)
    }

    queryHandler = (event) => {
        const newState = {
            query: event.target.value
        }
        this.setState(newState)
    }
}

export default Filters;
