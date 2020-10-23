import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import FooterPage from './components/Footer/Footer';
import Menu from './pages/Menu';
import Students from './pages/Students';
import Activities from './pages/Activities';
import Login from './pages/Login';
import SearchBooks from './pages/SearchBooks';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/students" component={Students} />
          <Route exact path="/" component={Login} />
          <Route exact path="/students/log/:student_id" component={Menu} />
          <Route
            exact
            path="/students/log/book/:student_id"
            component={SearchBooks}
          />
          <Route exact path="/students/log/activity/:student_id"
            component={Activities} />
        </Switch>
        <FooterPage />
      </div>
    </Router>
  );
};

export default App;
