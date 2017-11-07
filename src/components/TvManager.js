import React, { Component } from 'react';
import TvShows from './TvShows';
import Episodes from './Episodes';
import axios from 'axios';

// step 1: render the show data from Provider
// step 2: have this component pass props to TvShows and render TvShows
class TvManager extends Component {
  constructor() {
    super();

    this.state = {
      id: '',
      episodes: [],
      loading: false
    };
  }

  handleClick(id) {
    this.setState({ id: id, loading: true });

    axios.get(`https://api.themoviedb.org/3/tv/${id}/season/1?api_key=0b0d77f7b61147449b1f80d7026dd287&language=en-US`)
    .then(response => {
      setTimeout(() => {
        this.setState({ episodes: response.data.episodes, loading: false });
      }, 3000)
      console.log('Provider - state:', this.state.episodes);
    });
  }


  render() {
    const { loading } = this.state;
    const { data } = this.props;

    if (loading) {
      return <h3>Loading...</h3>
    }

    return(
      <div>
        <TvShows data={data} showId={ (id) => this.handleClick(id)} />
        <Episodes data={this.state.episodes} />
      </div>
    );
  }
}

export default TvManager;
