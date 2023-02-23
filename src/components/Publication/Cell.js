import React from 'react';
import PropTypes from 'prop-types';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3>
          <a href={data.link}>
            {data.title}
          </a>
        </h3>
        <div>
          {data.author.split(', ').map((author) => (
            <span style={{ fontSize: '10', paddingBottom: '5' }} key={`${data.title}-${author}`}>
              {author === 'Ut Gong' ? (
                <span style={{ fontWeight: 'bold' }}>{author}</span>
              ) : (
                <span>{author}</span>
              )}
              {', '}
            </span>
          ))}
        </div>
        <p>{data.date}</p>
        {data.conference && <p>{data.conference}</p>}
      </header>
      <a href={data.link} className="image">
        <img src={`${process.env.PUBLIC_URL}${data.image}`} alt={data.title} />
      </a>
      <div className="description">
        <p>{data.desc}</p>
      </div>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    link: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    conference: PropTypes.string,
  }).isRequired,
};

export default Cell;
