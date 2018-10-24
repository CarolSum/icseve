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
          <nav>
            <a href='/' className='icseve-logo'>
              <svg width='44px' height='62px'/>
            </a>
            <div className='content'>
              <h2>Navigation</h2>
              <ul>
                <li><a href='/' className='fx-fill-center'>Home</a></li>
                <li><a href='/' className='fx-fill'>Projects</a></li>
                <li><a href='/' className='fx-fill'>Capabilities</a></li>
                <li><a href='/' className='fx-fill'>About Me</a></li>
              </ul>
            </div>
          </nav>
          <div className='contact'>
            <div className='content'>
              <h2>Contact</h2>
              <a href={`mailto: carolleesum@gmail.com`} className='fx-fill'>carolleesum@gmail.com</a>
              <br/>
              <a href='tel: +86 1234567890'>+86 1234567890</a>
              <br/>
              <br/>
              <br/>
              <br/>
              <a href='#'>
                <h3>School of Data and Computer Science</h3>
                <br/>
                <h3>Sun Yat-Sen University</h3>
              </a>
            </div>
          </div>
          <div className='social'>
            <div className='content'>
              <h2>Let's keep in touch</h2>
              <a href='https://www.github.com/carolsum'>
                <svg width='44px' height='44px'></svg>
              </a>
              <br/>
              <a href='https://twitter.com/905965287Sum'>
                <svg width='44px' height='44px'></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
