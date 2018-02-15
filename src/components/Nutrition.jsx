import React from 'react';
import PropTypes from 'prop-types';

function Nutrition(props) {
  var innerStatusBar = {
    width: `${props.nutritionLevel}%`,
    height: '100%',
  };
  return (
    <div>
      <style jsx>{`
        .statusBarOuter {
          width: 400px;
          height: 20px;
          border: 1px solid black;
          background: linear-gradient(0deg, #fff, #aaa);
        }
        .statusBarInner {
          object-fit: cover;
          background: linear-gradient(180deg, #ff6060, #993737);
        }
      `}</style>
      <h1>{props.nutritionLevel}%</h1>
      <div className='statusBarOuter'>
        <div className='statusBarInner' style={innerStatusBar}></div>
      </div>
    </div>

  );
}

Nutrition.propTypes = {
  nutritionLevel: PropTypes.number
};

export default Nutrition;
