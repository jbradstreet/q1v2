import React, { Component } from 'react';
import TvShowPicker from './TvShowPicker';
import TvManager from './TvManager';
import axios from 'axios';

class Provider extends Component {
  constructor() {
    super();

    this.state = {
      shows: []
    };
  }

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


  render() {
    return (
      <div>
        <TvManager data={this.state.shows} />
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
