import React, { Component } from 'react';
import TvShowPicker from './TvShowPicker';
import TvManager from './TvManager';
import axios from 'axios';


// define propTypes!
// articles about this + react Lifecycle methods
class Provider extends Component {
  constructor() {
    super();

    // id being used as param not as state
    this.state = {
      shows: [],
      episodes: [],
      id: ''
    };
  }

  // react invoked
  componentDidMount() {
    const { params } = this.props.match;

    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=0b0d77f7b61147449b1f80d7026dd287&language=en-US&page=1&query=${params.tvShow}`)
      .then(response => {
        this.setState({ shows: response.data.results });
        console.log('Provider - state:', this.state.shows);
      })
      .catch(error => {
        console.log(error);
      })
  }

  // user invoked
  getEpisodes(id) {
    axios.get(`https://api.themoviedb.org/3/tv/${id}/season/1?api_key=0b0d77f7b61147449b1f80d7026dd287&language=en-US`)
    .then(response => {
      this.setState({ episodes: response.data.episodes })
      console.log('Provider - state:', this.state.episodes);
    });
  }

  // tvmanager has a provider, provider should not have a tv manager
  render() {
    return (
      <div>
        <TvManager showData={this.state.shows} episodeData={this.state.episodes} getEpisodesById={ (id) => this.getEpisodes(id) }/>
      </div>
    );
  }
}

export default Provider;

// --!
// before refactor
// componentDidMount() {
//   const { params } = this.props.match;
//
//   axios.get(`https://api.themoviedb.org/3/search/tv?api_key=0b0d77f7b61147449b1f80d7026dd287&language=en-US&page=1&query=${params.tvShow}`)
//     .then(response => {
//       this.setState({ shows: response.data.results });
//       console.log('Provider - state:', this.state.shows);
//     })
//     .catch(error => {
//       console.log(error);
//     })
// }
//
// handleClick(id) {
//   this.setState({ id: id, loading: true });
//
//     axios.get(`https://api.themoviedb.org/3/tv/${id}/season/1?api_key=0b0d77f7b61147449b1f80d7026dd287&language=en-US`)
//     .then(response => {
//       setTimeout(() => {
//         this.setState({ episodes: response.data.episodes, loading: false });
//       }, 3000)
//       console.log('Provider - state:', this.state.episodes);
//     })
// }

// --!
/* <TvShows data={this.state.shows} showId={ (id) => this.handleClick(id)} />
<Episodes
  data={this.state.episodes}
/> */

// --!
// setTimeout(() => {
//   this.setState({ episodes: response.data.episodes, loading: false });
// }, 3000)
