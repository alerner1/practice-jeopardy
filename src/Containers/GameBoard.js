import React from 'react';
import Categories from './Categories';
import CardRow from './CardRow';

class GameBoard extends React.Component {
  state = {
    categories: []
  }

  componentDidMount() {
    // get the first 15 categories because for now it's not customizable
    // only saves the first 6 categories with the correct point values
    fetch('https://www.jservice.io/api/categories?count=15')
      .then(resp => resp.json())
      .then(categories => {
         for (let category of categories) {
          fetch(`http://www.jservice.io/api/category?id=${category.id}`)
            .then(resp => resp.json())
            .then(category => {
              if (this.state.categories.length < 6 && category.clues.find(clue => { return clue.value === 600}) && category.clues.find(clue => { return clue.value === 800})) {
                this.setState(prev => ({
                  categories: [...prev.categories, category]
                }))
              }
            })
        }
      })
  }

  mapRows = () => {
    const levels = [200, 400, 600, 800, 1000];
    return levels.map(level => { return <CardRow appShowModal={this.props.appShowModal} key={level} clues={this.mapCluesByLevel(level)} /> })
  }

  mapCluesByLevel = level => {
    if (this.state.categories.length === 6) {
      return this.state.categories.map(category => {
        return category.clues.find(clue => {
          return clue.value === level;
        });
      });
    }
  }

  render() {
    return (
      <div className="gameboard">
        <Categories categories={this.state.categories} />
        {this.mapRows()}
      </div>
    );
  }
}

export default GameBoard;