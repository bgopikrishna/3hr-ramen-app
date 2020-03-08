/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <span>
        Made with &nbsp;<span style={{ color: '#D1452B' }}>❤️</span> &nbsp; and
        &nbsp;
        <span style={{ color: '#61DAFB' }}>
          <a
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            React
          </a>
        </span>
      </span>
      &nbsp; | &nbsp;
      <span>
        Coded By{' '}
        <a
          href='https://bgopikrishna.me'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: '#f70961' }}
        >
          Gopi Krishna
        </a>
      </span>
      &nbsp; | &nbsp;
      <span>
        View&nbsp;
        <a
          href='https://github.com/bgopikrishna/3hr-ramen-app'
          target='_blank'
          rel='noopener noreferrer'
          style={{ color: '#wheat' }}
        >
          Source Code
        </a>
      </span>
    </footer>
  );
};

export default Footer;
