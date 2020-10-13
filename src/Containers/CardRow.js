import React from 'react';
import AnswerCard from '../Components/AnswerCard';

class CardRow extends React.Component {
  mapRow = () => {
    if (!!this.props.clues && this.props.clues.length === 6) {
      return this.props.clues.map(clue => { 
        return <AnswerCard 
          categoryName={this.props.categoryNames[this.props.clues.indexOf(clue)]}
          appShowModal={this.props.appShowModal} 
          clue={clue} 
          key={clue.id} />
      })
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