import React, { Component } from 'react';
import EpisodeList from './EpisodeList';
import './App.css';

class Episodes extends Component {

  // eventually, move this list into the designated component
  // need two functions, one to add items to localStorage, another to remove items
  episodeArray = JSON.parse(localStorage.getItem('episodeList'));

  handleEpisodeClick(item, event) {
    let episodeArray = JSON.parse(localStorage.getItem('episodeList')) || []; // parse it to turn into object
    episodeArray.push(item.name);
    localStorage.setItem('episodeList', JSON.stringify(episodeArray)); // need to stringify to save it

    console.log('episode array:', episodeArray);
  }

  render() {
    const { episodeArray } = this;
    const { episodeData } = this.props;

    console.log('episodeArray:', episodeArray);


    const episodes = episodeData.map((episodes, index) => {
      let boundItemClick = this.handleEpisodeClick.bind(this, episodes);

      return(
        <div key={index}>
          <span>
            <h3 onClick={boundItemClick}>{episodes.name}</h3>
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
          <EpisodeList episodeList={episodeArray} />
      </div>
    );
  }
}

export default Episodes;

// --!
// for ( let i = 0; i < episodeArray.length; i++ ) {
//   if (episodeArray.indexOf(item.name) > -1) {
//     console.log(`${item.name} already exists` );
//     episodeArray.splice(episodeArray.indexOf(item.name), 1);
//     localStorage.setItem('episodeList', JSON.stringify(episodeArray));
//   }
// }
