import React from 'react';
import PropTypes from 'prop-types';

function Stat(props) {
  return(
    <div className='stat'>
      <style jsx>{`
        .outerStatusBar {
          height: 20px;
          width: 400px;
          border: 2px solid black;
        }
        .innerStatusBar {
          height: 100%;
          width: ${props.level}%;
          background: linear-gradient(180deg, ${props.color1}, ${props.color2});
        }
        .stat {
          display: flex;
          flex-basis: 50%;
          flex-direction: column;
        }
        .stat:nth-child(odd) {
          align-items: flex-start;
        }
        .stat:nth-child(odd) .innerStatusBar {
          float: left;
        }
        .stat:nth-child(even) {
          align-items: flex-end;
        }
        .stat:nth-child(even) .innerStatusBar {
          float: right;
        }

          `}</style>
      <div className='outerStatusBar'>
        <div className='innerStatusBar'></div>
      </div>
      <h1>{props.type}</h1>
      <h1>{props.level}</h1>
    </div>
  );
}

Stat.propTypes = {
  type: PropTypes.string,
  level: PropTypes.number,
  color1: PropTypes.string,
  color2: PropTypes.string
};

export default Stat;
