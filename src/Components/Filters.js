import React from 'react';
import * as API from './API';

class Filters extends React.Component {
  state = {
    filter: 'name',
    query: null,
    limit: 5,
  };

  render() {
    return (
      <div className='form'>
        <div className='filtersHeader'>Filters </div>

        <form>
          <div className='filter'>
            <label htmlFor='filter'>
              Search Term
              <select name='filter' id='filter' onChange={this.filterHandler}>
                <option value='name'>Name</option>
                <option value='year'>Year</option>
                <option value='mass'>Mass</option>
              </select>
            </label>
          </div>

          <div className='query'>
            <input type='text' id='query' onChange={this.queryHandler} />
          </div>

          <div className='limit'>
            <label htmlFor='limit'>
              Result Limit
              <select name='limit' id='limit' onChange={this.limitHandler}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='20'>20</option>
                <option value='50'>50</option>
              </select>
            </label>
          </div>
          <div className='searchButton'>
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
          </div>
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
