import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import './App.css';


// this will maintain STATE from Provider

// step 1: render the show data from Provider
// step 2: have this component pass props to TvShows and render TvShows
class TvManager extends Component {
  // constructor() {
  //   super();
  //
  //   this.state = {
  //     shows: []
  //   };
  // }

  render() {
    const { data } = this.props;
    return(
      <div>
      </div>
    );
  }
}

export default TvManager;
