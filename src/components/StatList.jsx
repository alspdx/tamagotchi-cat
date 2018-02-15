import React from 'react';
import PropTypes from 'prop-types';
import Stat from './Stat';

function StatList(props) {
  return(
    <div>
      <style jsx>{`
          div {
            display: flex;
            justify-content: space-between;
          }
          `}</style>
      {Object.keys(props.currentStats).map(function(statKey) {
        const stat = props.currentStats[statKey];
        return <Stat type={stat.type}
          level={stat.level}
          color1={stat.color1}
          color2={stat.color2}
          key={statKey} />;
      })}
    </div>
  );
}

StatList.propTypes = {
  currentStats: PropTypes.object
};

export default StatList;
