import * as React from 'react';
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
          </div>
          <div className='description-box' style={this.descriptionBoxStyle}>
            <div className='wrapper'>
              <div className='box intro'></div>
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
