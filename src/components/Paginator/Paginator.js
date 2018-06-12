import React from 'react';
import PropTypes from 'prop-types';
// import config from '../../config/config';
import './Paginator.css';

// const s = config.PAGINATOR_SIZE;
const s = 7;

const Paginator = (props) => {
  let { currentPage, pagesTotal, onControlClick } = props;

  pagesTotal = Number(pagesTotal) || 1;

  const range = Math.ceil(currentPage / s);
  const rangeStart = range ? ((range - 1) * s) + 1 : 1;
  const rangeEnd = range * s;
  const lastRangeStart = (Math.floor(pagesTotal / s) * s) + 1;

  const pageNumbers = [];

  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (i <= pagesTotal) {
      pageNumbers.push(i);
    }
  }

  const styleActive = {
    backgroundColor: '#4285f4',
    color: 'white',
  };

  return (
    <nav className="paginator">
      <p>pages: {pagesTotal}</p>
      <div>
        {pageNumbers[pageNumbers.length - 1] > s &&
          <button
            onClick={() => onControlClick(rangeStart - s)}
          >
            &lt;&lt;
          </button>
        }
        {pageNumbers.map(nr => (
          <button
            key={nr}
            style={nr === currentPage ? styleActive : null}
            onClick={() => onControlClick(nr)}
          >
            {nr}
          </button>
          ))}
        {pageNumbers[0] !== lastRangeStart &&
          <button
            onClick={() => onControlClick(rangeEnd + 1)}
          >
          &gt;&gt;
          </button>
        }
      </div>
    </nav>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default Paginator;
