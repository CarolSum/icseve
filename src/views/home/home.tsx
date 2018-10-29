import * as React from 'react';
import Footer from 'src/components/share/footer/footer';
import FrontPage from 'src/layouts/front-page/front-page';
import MenuButton from '../../components/share/menu-button/menu-button';
import './home.less';

class TheHome extends React.Component {
  public render() {
    return (
      <div>
        <MenuButton></MenuButton>
        <FrontPage></FrontPage>
        <Footer></Footer>
      </div>
    );
  }
}

export default TheHome;
