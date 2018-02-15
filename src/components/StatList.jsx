import React from 'react';
import PropTypes from 'prop-types';

function StatList(props) {
  return(
    <div>
      <h1>{props.currentStats.currentNutritionLevel}</h1>
      <h1>{props.currentStats.currentHappinessLevel}</h1>
    </div>
  );
}

StatList.propTypes = {
  currentStats: PropTypes.object
};

export default StatList;
