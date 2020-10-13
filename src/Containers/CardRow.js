import React from 'react';
import AnswerCard from '../Components/AnswerCard';

class CardRow extends React.Component {
  mapRow = () => {
    if (!!this.props.clues && this.props.clues.length === 6) {
      return this.props.clues.map(clue => { return <AnswerCard appShowModal={this.props.appShowModal} clue={clue} key={clue.id} />})
    }
  }

  render() {
    return (
      <div className="row">
        {this.mapRow()}
      </div>
    );
  }
}

export default CardRow;