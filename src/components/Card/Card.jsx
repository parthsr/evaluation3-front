import React from 'react';
import './Card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    return (
      <div className="Card-flex">
        <div className="Card-left">
          <p className="Card-welcome">Welcome</p>
          <p className="Card-to">to</p>
          <p className="Card-quizzy">Quizzy!</p>
        </div>
        <div className="Card-right">
          <p className="Card-login">Login</p>
          <p className="Card-username">UserName</p>
          <input className="Card-input" onChange={event => this.props.nameUser(event)} />
          <button className="Card-button"onClick={() => this.props.onClick()}>Login</button>
        </div>
      </div>
    );
  }
}

export default Card;
