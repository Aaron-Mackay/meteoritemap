import React from 'react';
import * as API from './API';

class Filters extends React.Component {
  state = {
    filter: null,
    query: null,
    limit: null,
  };

  render() {
    return (
      <div>
        Filters <br />
        <form>
          <label htmlFor='filter'>
            Search Term
            <select
              className='filter'
              name='filter'
              id='filter'
              onChange={this.filterHandler}
            >
              <option value='none'>None</option>
              <option value='name'>Name</option>
              <option value='year'>Year</option>
              <option value='mass'>Mass</option>
            </select>
          </label>
          <br />
          <label htmlFor='limit'>
            Result Limit
            <select
              className='limit'
              name='limit'
              id='limit'
              onChange={this.limitHandler}
            >
              <option value='0'>0</option>
              <option value='5'>5</option>
              <option value='10'>10</option>
              <option value='20'>20</option>
              <option value='50'>50</option>
            </select>{' '}
          </label>
          <br />
          <input
            className='query'
            type='text'
            id='query'
            onChange={this.queryHandler}
          />
          <br />
          <button
            onClick={(event) => {
              event.preventDefault();
              this.props.submitFilter(
                this.state.filter,
                this.state.query,
                this.state.limit
              );
              console.log('clicked');
            }}
          >
            Search
          </button>
        </form>
      </div>
    );
  }

  filterHandler = (event) => {
    const newState = {
      filter: event.target.value,
    };
    this.setState(newState);
  };

  queryHandler = (event) => {
    const newState = {
      query: event.target.value,
    };
    this.setState(newState);
  };

  limitHandler = (event) => {
    const newState = {
      limit: event.target.value,
    };
    this.setState(newState);
  };
}

export default Filters;
