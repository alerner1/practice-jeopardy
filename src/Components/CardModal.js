import React from 'react';
import '../index.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'

class CardModal extends React.Component {
  state = {
    display: ''
  }

  componentDidUpdate() {
    if (this.state.display !== this.props.clue.question && this.state.display !== this.props.clue.answer) {
      this.setState({display: this.props.clue.question})
    }
  }

  toggleAnswer = () => {
    if (this.state.display === this.props.clue.question) {
      this.setState({display: this.props.clue.answer})
    } else if (this.state.display === this.props.clue.answer) {
      this.setState({display: this.props.clue.question})
    }
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{this.props.clue.value}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{this.state.display}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={this.toggleAnswer}>
          {this.state.display === this.props.clue.question ? 'Show Answer: What is...' : 'Show Prompt'}
        </Button>
      </Modal.Footer>
    </Modal>
    );
  }
}

export default CardModal;