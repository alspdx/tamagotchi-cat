import React from 'react';
import PropTypes from 'prop-types';

function FeedBtn(props) {
  return (
    <div>
      <button onClick={props.onFeedCatTreat}>Treat</button>
      <button onClick={props.onFeedCatMeal}>Meal</button>
    </div>
  );
}

FeedBtn.propTypes = {
  onFeedCatTreat: PropTypes.func,
  onFeedCatMeal: PropTypes.func
};

export default FeedBtn;
