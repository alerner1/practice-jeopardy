import React from 'react';
import GameBoard from './Containers/GameBoard';
import CardModal from './Components/CardModal';
import './index.scss'

class App extends React.Component {
  state = {
    show: false,
    clue: {},
  }

  showModal = clue => {
    this.setState(prev => ({
      show: !prev.show,
      clue: clue
    }));
  };

  render() {
    return (
      <div  className="App">
        <GameBoard appShowModal={this.showModal} />
        <CardModal onClose={this.showModal} show={this.state.show} clue={this.state.clue} />
      </div>
    );
  }
}

export default App;
