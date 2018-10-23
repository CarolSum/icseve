import * as React from 'react';
import './menu-button.less';

class MenuButton extends React.Component {
  public render() {
    return (
      <div id='menu-button'>
        <div className='rotate'>
          <svg id='bg' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
            version='1.1' width='100px' height='100px' viewBox='0 0 100 100' preserveAspectRatio='xMinYMin'>
            <circle cx='50' cy='50' r='50'></circle>
          </svg>
          <svg id='tagline' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'
            version='1.1' width='100px' height='100px' viewBox='0 0 100 100'preserveAspectRatio='xMinYMin'>
            <defs>
              <path id='textPath' transform='translate(16 16)'
                d='M0,34C0,15.2,15.2,0,34,0c18.8,0,34,15.2,34,34S52.8,68,34,68S0,52.8,0,34z'>
              </path>
            </defs>
            <text x='0' y='0' textAnchor='start' textLength='201'>
              <textPath xlinkHref='#textPath' startOffset='3%'>CREATED BY CAROL SUM LEE</textPath>
            </text>
            <circle id='dot' cx='12' cy='50' r='1.5'></circle>
          </svg>
          <div className='burger middle'></div>
        </div>
        <div className='burger top'></div>
        <div className='burger bottom'></div>
      </div>
    );
  }
}

export default MenuButton;
