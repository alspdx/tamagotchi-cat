import React from 'react';
import StatList from './StatList';
import FeedBtn from './FeedBtn';

class Cat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStats: {
        currentNutritionLevel: {
          type: 'Nutrition',
          level: 100,
          color1: '#ffd754',
          color2: '#7f671a'
        },
        currentHappinessLevel: {
          type: 'Happiness',
          level: 65,
          color1: '#67fce1',
          color2: '#1f7565'
        }
      }
    };
    this.handleFeedCat = this.handleFeedCat.bind(this);
  }

  componentDidMount() {
    this.nutritionLevelTimer = setInterval(() =>
      this.lowerNutritionLevel(),
    1000
    );
  }

  changeNutritionLevel(howMuchToChange) {
    const newLevelNumber = this.state.currentStats.currentNutritionLevel.level + howMuchToChange;
    const newNutritionLevel = Object.assign({}, this.state.currentStats.currentNutritionLevel, {level: newLevelNumber});
    const newCurrentStats = Object.assign({}, this.state.currentStats, {currentNutritionLevel: newNutritionLevel});
    this.setState({currentStats: newCurrentStats});
  }

  lowerNutritionLevel() {
    if (this.state.currentStats.currentNutritionLevel.level === 50) {
      alert('The cat meows a hungry meow.');
    } else if (this.state.currentStats.currentNutritionLevel.level === 25) {
      alert('The cat is very hungry. Please feed the cat.');
    } else if (this.state.currentStats.currentNutritionLevel.level === 10) {
      alert('The cat is going to die if you do not feed it. Please do not kill the cat.');
    } else if (this.state.currentStats.currentNutritionLevel.level <= 1) {
      alert('This blood is on YOUR hands. YOU killed this cat. MURDERER!');
      clearInterval(this.nutritionLevelTimer);
    }
    this.changeNutritionLevel(-1);
  }

  handleFeedCat(foodType) {
    let amountOfNutrition = 0;
    if ((this.state.currentStats.currentNutritionLevel.level > 90) && (foodType === 'meal')) {
      alert('The cat is not hungry for a meal!');
    } else if (foodType === 'treat') {
      amountOfNutrition = 5;
    } else if ((this.state.currentStats.currentNutritionLevel.level <= 90) && (foodType === 'meal') ) {
      amountOfNutrition = 30;
    }
    this.changeNutritionLevel(amountOfNutrition);
  }

  render () {
    return(
      <div>
        <StatList currentStats={this.state.currentStats} />
        {this.state.currentStats.currentNutritionLevel.level < 100 &&
          <FeedBtn
            onFeedCatTreat={() => this.handleFeedCat('treat')}
            onFeedCatMeal={() => this.handleFeedCat('meal')}
          />
        }
      </div>
    );
  }
}

export default Cat;
