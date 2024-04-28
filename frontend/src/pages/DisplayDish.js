// App.js or your main component where routing is set up
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dummy from '../components/Dummy';
import SelectedDish from '../components/SelectedDish';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dummy} />
        <Route path="/selected-dish" component={SelectedDish} />
      </Switch>
    </Router>
  );
};

export default App;
