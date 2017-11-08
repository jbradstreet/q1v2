import React, { Component } from 'react';

class EpisodeList extends Component {

  render() {
    const { episodeList } = this.props
    console.log('EpisodeList Props:', this.props);
    return(
      <div>
        <h3>EpisodeList Component</h3>
        { episodeList ?
          (<span>
            <h3>Episode list!</h3>
            <span>{episodeList.toString()}</span>
          </span>)
          : <h3>Nothing yet</h3>
        }
      </div>
    );
  }

}

export default EpisodeList;
