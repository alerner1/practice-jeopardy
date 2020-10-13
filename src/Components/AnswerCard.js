import React from 'react';

class AnswerCard extends React.Component {
  state = {
    display: this.props.clue.value
  }

  showModal = () => {
    this.props.appShowModal(this.props.clue)
  }

  render() {
    return (
      <div 
        className="col card bg-primary text-white text-center" 
        style={{height: '5rem'}}
        onClick={this.showModal}
      >
        <div className="my-auto">{this.state.display}</div>
      </div>
    );
  }
}

export default AnswerCard;