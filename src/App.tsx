// import { Button } from 'antd';
// import 'antd/lib/button/style/css';
import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.less';
import AboutMe from './views/about-me/about-me';
import TheCapability from './views/capabilities/capabilities';
// import logo from './logo.svg';
import TheHome from './views/home/home';
import TheProjects from './views/project/projects';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <Switch>
          <Redirect exact from='/' to='/home'/>
          <Route path='/home' component={TheHome} />
          <Route path='/about' component={AboutMe} />
          <Route path='/projects' component={TheProjects} />
          <Route path='/capability' component={TheCapability} />
        </Switch>
      </Router>
    );
  }
}

export default App;
