import React, { Component } from 'react';
import TvShows from './TvShows';
import Episodes from './Episodes';
import axios from 'axios';

// step 1: get the show data from Provider
// step 2: have this component pass props to TvShows and render TvShows
class TvManager extends Component {

  handleClick(id) {
    const { getEpisodesById } = this.props;
    getEpisodesById(id);
  }

  render() {
    const { showData, episodeData } = this.props;

    return(
      <div>
        <TvShows showData={showData} showId={ (id) => this.handleClick(id)} />
        <Episodes episodeData={episodeData} />
      </div>
    );
  }
}

export default TvManager;

// --!
// these were in the render method before, when I was using a setTimeout on setting state
// const { loading } = this.state;
// if (loading) {
//   return <h3>Loading...</h3>
// }

// --!
// this was in the click handler before
// this.setState({ id: id, loading: true });
