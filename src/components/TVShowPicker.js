import React, { Component } from 'react';
import { object } from 'prop-types';
// import PropTypes from 'prop-types'; // needed this if I wanted to use `context`
import { withRouter } from 'react-router-dom';

class TVShowPicker extends Component {
  //possibly need to make userInput a prop to pass down to Provider?

  goToEpisodes(event) {
    event.preventDefault();

    const tvShow = {
      userInput: this.showInput.value
    }
    console.log(`Input from TVShowPicker - ${tvShow.userInput}!`);
    this.props.history.push(`/tvshows/${tvShow.userInput}`)
  }


  render() {
    return(
      <form onSubmit={this.goToEpisodes.bind(this)}>
        <h2>What Show Are You Watching?</h2>
        <input
          type='text'
          required placeholder="TV Show goes here"
          ref={ (input) => { this.showInput = input } }
        />
        <button type="submit">Search!</button>
      </form>
    );
  };

}

TVShowPicker.propTypes = {
  router: object
}

export default withRouter(TVShowPicker);


// event = info being sent within `render()` on submit
// event.preventDefault() = basic js, stops page from autorefresh on submit
// ref = a way to reference the input data without touching the DOM
// line 8 = was undefined, because 'this' is not automatically bound to the component in a method
  // instead of using a constructor, we can bind the goToEpisodes method to `this` on line 17 within `onSubmit`

// state = an object that holds data. change it is a way to make a component re-render itself
// props = an object allowing us to pass data between components
// context (line 39) = allows to declare at top level and make that declaration available to children
  // context is an expirimental API in react allows you to pass data down components without passing props manually at every level
