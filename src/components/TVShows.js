import React, { Component } from 'react';
import './App.css';

// only has a render method, can convert this to a functional component.
class TVShows extends Component {
    // get the url params, give that to Provider
    // update params in Provider, get shows from Provider
    // constructor() {
    //   super();
    //
    //   this.state = {
    //     params:''
    //   };
    // }

  render() {
    console.log('TVShows - props:', this.props);

    const { data } = this.props;
    const shows = data.map((show, index) => {
      return(
        <div key={index}>
          <span>
            <h3>{show.original_name}</h3>
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

export default TVShows;
