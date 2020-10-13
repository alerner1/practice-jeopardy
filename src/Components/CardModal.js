import React from 'react';
import '../index.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

class CardModal extends React.Component {
  state = {
    isFlipped: false
  }

  flipCard = () => {
    this.setState(prev => ({isFlipped: !prev.isFlipped}))
  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.setState({isFlipped: false})
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{!!this.props.clue && (this.props.categoryName + ' for ' + this.props.clue.value)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Flippy 
          flipDirection="horizontal"
          ref={r => this.flippy = r}
          isFlipped={this.state.isFlipped}
        >
          <FrontSide>
            {!!this.props.clue && this.props.clue.question}
          </FrontSide>
          <BackSide>
            {!!this.props.clue && this.props.clue.answer}
          </BackSide>
        </Flippy>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.onClose}>
          Close
        </Button>
        <Button variant="primary" onClick={this.flipCard}>
          Flip Card
        </Button>
      </Modal.Footer>
    </Modal>
    );
  }
}

export default CardModal;