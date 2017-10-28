import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import App from './components/App';
import TVShows from './components/TVShows';
import Episodes from './components/Episodes';
import registerServiceWorker from './registerServiceWorker';
// import NotFound from './components/NotFound';
import Provider from './components/Provider';

// stateless functional component
const Root = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={App} />
        {/* <Route  component={NotFound} /> */}
        <Route path="/tvshows/:tvShow" exact component={Provider} />
        <Route path="/episodes/:tvShow" exact component={Episodes} />
      </div>
    </Router>
  );
}

// TODO: use the TVShow component to display the API results on line 19



render(<Root />, document.getElementById('root'));
registerServiceWorker();
