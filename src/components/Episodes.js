import React, { Component } from 'react';
import './App.css';

// only has a render method, can convert this to a functional component.
class Episodes extends Component {

  render() {
    const { data } = this.props;

    const episodes = data.map((episodes, index) => {
      return(
        <div key={index}>
          <span>
            <h3>{episodes.name}</h3>
            <p>Episode Number: {episodes.episode_number}</p>
            <p>Air Date: {episodes.air_date}</p>
            <p>Overview: {episodes.overview ? episodes.overview : 'no overview provided'}</p>
          </span>
        </div>
      )
    })

    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Here are the Episodes!</h1>
        </header>
          { episodes.length > 0  ?
            (<span>
              <h3>Episodes loaded!</h3>
              {episodes}
            </span>)
            : <h3>Nothing yet</h3>
          }
      </div>
    );
  }
}

export default Episodes;

// sanity check
// console.log('Episodes - props:', this.props);
