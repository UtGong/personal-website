import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>

      <header>
        <h2>Ut(Jo Jo) Gong <p style={{ fontSize: '15px', color: 'gray' }}>They/them</p></h2>
        <p><a href="mailto:jojogong3736@gmail.com">jojogong3736@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jo Jo. I like playing with data.
        I am an <a href="https://ischool.uw.edu/">UW iSchool</a> undergrad student. My research interest includes Data Mining, SportsXR, and AI. I&apos; m currently looking for research opportunities starting from Summer 2023 and PhD position in Fall 2024.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* todo: edit link */}
      <p className="copyright">&copy; Ut Gong <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
