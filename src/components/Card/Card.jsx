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
          <p>Welcome</p>
          <p>to</p>
          <p>Quizzy!</p>
        </div>
        <div>
          <p>Login</p>
          <p>UserName</p>
          <input onChange={event => this.props.nameUser(event)} />
          <button onClick={() => this.props.onClick()}>Login</button>
        </div>
      </div>
    );
  }
}

export default Card;
