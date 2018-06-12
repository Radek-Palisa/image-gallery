import React from 'react';
import PropTypes from 'prop-types';
import './MediaCard.css';

const MediaCard = (props) => {
  const {
    imgSrcSmall,
    owner,
    title,
    url,
    onClick,
  } = props;

  return (
    <div className="media-card">
      <div
        className="media-card__img"
        onClick={() => onClick(props)}
      >
        <img src={imgSrcSmall} alt={title} />
      </div>
      <p className="media-card__title">{title}</p>
      <p>
        Author: <a href={url}>{owner}</a>
      </p>
    </div>
  );
};

MediaCard.defaultProps = {
  title: '',
};

MediaCard.propTypes = {
  imgSrcSmall: PropTypes.string.isRequired,
  owner: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default MediaCard;
