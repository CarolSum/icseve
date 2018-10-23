import * as React from 'react';
import './footer.less';
class Footer extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      contact: {
        mail: 'carolleesum@gmail.com',
        phone: '+86 1234567890',
        addr: 'Sun Yat-Sen University，School of Data and Computer Science'
      }
    };
  }

  public render() {
    return (
      <footer id='footer' className='wrapper menu'>
        <div className='height'>
          <nav></nav>
          <div className='contact'>
            <div className='content'>
              <h2>Contact</h2>
              <a href={`mailto: carolleesum@gmail.com`} className='fx-fill'>carolleesum@gmail.com</a>
              <br/>
              <a href='tel: +86 1234567890'>+86 1234567890</a>
              <a href='#'>
                <h3>School of Data and Computer Science</h3>
                <br/>
                <h3>Sun Yat-Sen University</h3>
              </a>
            </div>
          </div>
          <div className='social'></div>
        </div>
      </footer>
    );
  }
}

export default Footer;
