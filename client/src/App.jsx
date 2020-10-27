import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Students from './pages/Students/Students';
import Activity from './pages/Activity';
import Login from './pages/Login/Login';
import SearchBooks from './pages/SearchBooks';
import NewStudent from './pages/NewStudent';
import Register from './pages/Register';
import GlobalStore from './utils/context/GlobalStore';

const App = () => {

    return (
    <Router>
      <GlobalStore.GlobalProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/students/log/:student_id" component={Menu} />
          <Route
            exact
            path="/students/log/book/:student_id"
            component={SearchBooks}
          />
          <Route
            exact
            path="/students/log/activity/:student_id"
            component={Activity}
          />
          <Route exact path="/students/new" component={NewStudent} />
        </Switch>
      </GlobalStore.GlobalProvider>
    </Router>
  );
};

export default App;
