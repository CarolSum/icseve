import * as React from 'react';
import MenuButton from '../../components/share/menu-button';
import './home.less';

class TheHome extends React.Component {
  public render() {
    return (
      <div>
        <h1>Home Page</h1>
        <MenuButton></MenuButton>
      </div>
    );
  }
}

export default TheHome;
