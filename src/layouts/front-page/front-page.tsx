import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import cocioImg from '../../assets/images/cocio_desktop.jpg';
import generousStoreImg from '../../assets/images/generous-store_desktop.jpg';
import passItOnImg from '../../assets/images/pass-it-on_desktop.jpg';
import './front-page.less';

class FrontPage extends React.Component {
  descriptionBoxStyle = {
    width: '418px'
  };

  canvasStyle = {
    width: '100vw',
    height: '100vh',
    cursor: 'inherit'
  };

  frontPageStyle: any = {
    display: 'inherit',
    visibility: 'visible'
  };

  public render() {
    return (
      <div className='site'>
        <div id='main-patterns'>
          <div className='pattern'>
            <canvas style={this.canvasStyle}></canvas>
          </div>
        </div>
        <div className='page frontpage' style={this.frontPageStyle}>
          <div className='layer'>
            <div className='part project intro'></div>
            <div className='part project sigdetvidere'>
              <div className='wrapper'>
                <picture>
                  <img src={passItOnImg}
                    sizes='(max-width: 299px) 66vw, 660px'
                    alt='A picture of the Experimentarium Pass It On project'/>
                </picture>
              </div>
            </div>
            <div className='part project cocio'>
              <div className='wrapper'>
                <picture>
                  <img src={cocioImg}
                    sizes='(max-width: 299px) 66vw, 660px'
                    alt='A picture of the Cocio project'/>
                </picture>
              </div>
            </div>
            <div className='part project generosity'>
              <picture>
                <img src={generousStoreImg}
                  sizes='100vw'
                  alt='A picture of the Anthon Berg Generous Store project'/>
              </picture>
            </div>
          </div>
          <ul className='part about'>
            <li className='capabilities'>
              <div className='wrapper'>
                <div className='pattern'></div>
              </div>
              <div className='description'>
                <div className='content'>
                  <div className='center'>
                    <h2>Our capabilities</h2>
                    <h3>How can we help you?</h3>
                    <a href='/capability'>Read More</a>
                  </div>
                </div>
              </div>
            </li>
            <li className='about-me'>
              <div className='wrapper'>
                <div className='pattern'></div>
              </div>
              <div className='description'>
                <div className='content'>
                  <div className='center'>
                    <h2>About Me</h2>
                    <h3>An introduction to icseve</h3>
                    <a href='/about'>Read More</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <div className='description-box' style={this.descriptionBoxStyle}>
            <div className='wrapper'>
              <div className='box intro'>
                <div className='content middle'>
                  <div id='logo'>
                    <FontAwesomeIcon icon={['fab', 'cloudsmith']} className='icseve-logo'/>
                  </div>
                  <div className='center'>
                    <h1>Welcome to Icseve</h1>
                    <h2>This is a digital partner</h2>
                    <p>We have been collaborating with brands and agencies
                       to build meaningful digital interactions since 2008.</p>
                  </div>
                </div>
              </div>
              <div className='box pass-it-on'></div>
              <div className='box cocio'></div>
              <div className='box generous-store'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FrontPage;
