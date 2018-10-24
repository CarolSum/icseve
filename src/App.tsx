// import { Button } from 'antd';
// import 'antd/lib/button/style/css';
// import logo from './logo.svg';
import { library } from '@fortawesome/fontawesome-svg-core';
// import brands fa icons
// usage: icon={['fab', 'github']}
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
// import regular fa icons
// usage: icon={['far', 'check-circle']}
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
// import solid fa icons
// usage: icon='ghost'
import { faGhost } from '@fortawesome/free-solid-svg-icons';

import * as React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './App.less';
import AboutMe from './views/about-me/about-me';
import TheCapability from './views/capabilities/capabilities';
import TheHome from './views/home/home';
import TheProjects from './views/project/projects';

library.add(
  faGhost,
  faTwitter,
  faGithub,
  faCheckCircle
);


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
