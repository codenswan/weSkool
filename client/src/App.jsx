import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';
import Students from './pages/Students';
import Activity from './pages/Activity';
import Login from './pages/Login';
import SearchBooks from './pages/SearchBooks';

const App = () => {
  return (
    <Router>
      <div>
  
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/students/log/:student_id" component={Menu} />
          <Route
            exact
            path="/students/log/book/:student_id"
            component={SearchBooks}
          />
          <Route exact path="/students/log/activity/:student_id"
            component={Activity} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
