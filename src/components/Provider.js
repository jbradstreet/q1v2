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
      episodes: [],
      id: '',
      loading: false
    };
  }

  // --!
  // below will need to be asynchronous. These have tasks that have a "waiting" aspect,
  // event driven. We need the code to "wait" until something happens before doing anything.
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

  handleClick(id) {
    this.setState({ id: id, loading: true });

      axios.get(`https://api.themoviedb.org/3/tv/${id}/season/1?api_key=0b0d77f7b61147449b1f80d7026dd287&language=en-US`)
      .then(response => {
        setTimeout(() => {
          this.setState({ episodes: response.data.episodes, loading: false });
        }, 3000)
        console.log('Provider - state:', this.state.episodes);
      })
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return <h3>Loading...</h3>
    }

    return (
      <div>
        <TVShows data={this.state.shows} showId={ (id) => this.handleClick(id)} />
        <Episodes
          data={this.state.episodes}
        />
      </div>
    );
  }

}

export default Provider;
