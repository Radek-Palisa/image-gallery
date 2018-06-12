import React from 'react';
import PropTypes from 'prop-types';
import './Lightbox.css';

const Lightbox = (props) => {
  const {
    imgSrcFull,
    title,
    owner,
    description,
    tags,
    dateTaken,
  } = props.photo;

  const handleClick = (e) => {
    if (e.target.id === 'lightbox-js') {
      props.onClose();
    }
  };

  return (
    <div
      id="lightbox-js"
      className="lightbox"
      onClick={e => handleClick(e)}
    >
      <div className="lightbox__content">
        <button
          className="lightbox-close"
          onClick={props.onClose}
        >
          close
        </button>
        <img src={imgSrcFull} alt={title} />
        <p>Title: {title}</p>
        <p>Author: {owner}</p>
        <p>Date taken: {dateTaken}</p>
        <p>Description: {description}</p>
        <p>Tags: {tags}</p>
      </div>
    </div>
  );
};

Lightbox.propTypes = {
  photo: PropTypes.shape({
    imgSrcFull: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Lightbox;
