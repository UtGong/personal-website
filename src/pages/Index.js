import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Ut Gong's personal website. Year 3 student majoring in Informatics and minoring in computational finance in University of Washington."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Hi, I&apos;m Jo Jo.</Link></h2>
          <p style={{ fontSize: '16px', fontFamily: 'Noto Sans' }}>
            I am an UW iSchool undergraduate student. <br />
            My research interest includes Data Mining, SportsXR, and AI. <br />
            I am currently looking for research opportunities starting from Summer 2023
            and PhD position in Fall 2024.
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        <Link to="/publications">publications</Link>, {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
