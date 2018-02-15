import React from 'react';
import StatList from './StatList';
import FeedBtn from './FeedBtn';

class Cat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentStats: {
        currentNutritionLevel: 90,
        currentHappinessLevel: 100
      }
    };
    this.handleFeedCat = this.handleFeedCat.bind(this);
  }

  // componentDidMount() {
  //   this.nutritionLevelTimer = setInterval(() =>
  //     this.lowerNutritionLevel(),
  //   1000
  //   );
  // }

  lowerNutritionLevel() {
    if (this.state.currentStats.currentNutritionLevel === 50) {
      alert('The cat meows a hungry meow.');
    } else if (this.state.currentStats.currentNutritionLevel === 25) {
      alert('The cat is very hungry. Please feed the cat.');
    } else if (this.state.currentStats.currentNutritionLevel === 10) {
      alert('The cat is going to die if you do not feed it. Please do not kill the cat.');
    } else if (this.state.currentStats.currentNutritionLevel <= 1) {
      alert('This blood is on YOUR hands. YOU killed this cat. MURDERER!');
      clearInterval(this.nutritionLevelTimer);
    }
    // this.setState({currentStats.currentNutritionLevel: (this.state.currentStats.currentNutritionLevel - 1)});
  }

  handleFeedCat(foodType) {
    let amountOfNutrition = 0;
    if ((this.state.currentStats.currentNutritionLevel > 90) && (foodType === 'meal')) {
      alert('The cat is not hungry for a meal!');
    } else if (foodType === 'treat') {
      amountOfNutrition = 5;
    } else if ((this.state.currentStats.currentNutritionLevel <= 90) && (foodType === 'meal') ) {
      amountOfNutrition = 30;
    }
    const newNutritionValue = this.state.currentStats.currentNutritionLevel + amountOfNutrition;
    const newCurrentStats = Object.assign({}, this.state.currentStats, {currentNutritionLevel: newNutritionValue});
    this.setState({currentStats: newCurrentStats});
  }

  render () {
    return(
      <div>
        <StatList currentStats={this.state.currentStats} />
        {this.state.currentStats.currentNutritionLevel < 100 &&
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
