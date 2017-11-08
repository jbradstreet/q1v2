import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import App from './components/App';
import TvShows from './components/TvShows';
import Episodes from './components/Episodes';
import EpisodeList from './components/EpisodeList';
import registerServiceWorker from './registerServiceWorker';
// import NotFound from './components/NotFound';
import Provider from './components/Provider';

// stateless functional component
// sub in manager in place of provider
const Root = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={App} />
        {/* <Route  component={NotFound} /> */}
        <Route path="/TvShows/:tvShow" exact component={Provider} />
        <Route path="/episodes/:tvShow" exact component={Episodes} />
        <Route path="/mylist" exact component={EpisodeList} />
      </div>
    </Router>
  );
}

// TODO: use the TVShow component to display the API results on line 19



render(<Root />, document.getElementById('root'));
registerServiceWorker();
