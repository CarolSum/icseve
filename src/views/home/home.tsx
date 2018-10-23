import * as React from 'react';
import Footer from 'src/components/share/footer/footer';
import MenuButton from '../../components/share/menu-button/menu-button';
import './home.less';

class TheHome extends React.Component {
  public render() {
    return (
      <div>
        <h1>Home Page</h1>
        <MenuButton></MenuButton>
        <Footer></Footer>
      </div>
    );
  }
}

export default TheHome;
