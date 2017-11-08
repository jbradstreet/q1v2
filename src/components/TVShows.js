import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

// only has a render method, can convert this to a stateless functional component.

class TvShows extends Component {

  render() {
    const { showData, showId } = this.props;
    console.log('TvShows - props:', this.props);

    const shows = showData.map((show, index) => {
      return(
        <div key={index}>
          <span>
            <a onClick={ () => showId(show.id) } >
              {show.original_name}
            </a>
            <p>{show.overview ? show.overview : 'no overview provided'}</p>
          </span>
        </div>
      )
    })

    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Here are the TV Shows!</h1>
        </header>
          <p>{shows}</p>
      </div>
    );
  }
}

export default TvShows;

// sanity check
// console.log('TvShows - props:', this.props);
