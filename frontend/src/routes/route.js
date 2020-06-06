import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Recruit from '../pages/recruit'
import Introduce from '../pages/introduce'

export default () => (
  <Router>
    <Route path="/recruit" component={Recruit} />
    <Route path="/introduce" component={Introduce} />
  </Router>
)