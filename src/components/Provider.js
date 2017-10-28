import React, { Component } from 'react';
import TVShowPicker from './TVShowPicker';
import TVShows from './TVShows';
import Episodes from './Episodes';
import axios from 'axios';

class Provider extends Component {
  constructor() {
    super();

    this.state = {
      shows: [],
      episodes: []
    };
  }

  componentDidMount() {
    // const { params } = this.props.match;
    // axios.get(`https://api.themoviedb.org/3/search/tv?api_key=0b0d77f7b61147449b1f80d7026dd287&language=en-US&page=1&query=${params.tvShow}`) // this works to get user input on search
    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=0b0d77f7b61147449b1f80d7026dd287&language=en-US&page=1&query=glow`) // static for now, passing down to TVShows

    // axios.get(`https://api.themoviedb.org/3/tv/70573/season/1?api_key=0b0d77f7b61147449b1f80d7026dd287&language=en-US`) // static, passing down to Episodes

      .then(response => {
        this.setState({ shows: response.data.results });
        console.log('Provider - state:', this.state.shows);
      })
      //  this is to get the episodes
      // .then(response => {
      //   this.setState({ episodes: response.data.episodes });
      //   console.log('Provider - state:', this.state.episodes);
      // })
      .catch(error => {
        console.log(error);
      })
  }

  // TODO: logic below is what should go into TVShow component
  render() {

    if(!this.state.shows) {
      return <p>Getting data...</p>
    }

    return (
      <div>
        <TVShows data={this.state.shows} />
        {/* <Episodes data={this.state.episodes} /> */}
      </div>
    );
  }

}

export default Provider;

// this was in  `componentDidMount` before
// use the map method to map each show into it's own div, store all of that in the `shows` variable.
// const shows = response.data.results.map((show, index) => {
//   return(
//     <div key={index}>
//       <span>
//         <h3>{show.original_name}</h3>
//         <p>{show.overview ? show.overview : 'no overview provided'}</p>
//       </span>
//     </div>
//   )
// })
