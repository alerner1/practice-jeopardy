import React from 'react';
import GameBoard from './Containers/GameBoard';
import CardModal from './Components/CardModal';
import './index.scss'

class App extends React.Component {
  state = {
    show: false,
    clue: {},
    categoryName: ''
  }

  showModal = (clue, categoryName) => {
    this.setState(prev => ({
      show: !prev.show,
      clue: clue,
      categoryName: categoryName
    }));
  };

  render() {
    return (
      <div  className="App">
        <GameBoard appShowModal={this.showModal} />
        <CardModal categoryName={this.state.categoryName} onClose={this.showModal} show={this.state.show} clue={this.state.clue} />
      </div>
    );
  }
}

export default App;
