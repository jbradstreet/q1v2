import React, { Component } from 'react';
import TVShow from './TVShow';

class Episode extends Component {
  // given the TVShow, display all episodes of that show.

  render() {
    return(
      <div>
        <TVShow />
      </div>
    );
  };
}

export default Episode;
