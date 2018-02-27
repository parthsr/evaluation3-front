import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Questions from '../Questions/Questions';
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pageNo: 1,
      userInfo: '',
    };
  }
  onLogin = () => {
    console.log(this.state.username);
    axios.post('/user', { username: 'parth' }).then((response) => {
      console.log(response.data);
      this.setState({
        pageNo: 2,
        userInfo: response.data,
      });
    });
  }
  nameUser = (event) => {
    this.setState({
      username: event.target.value,
    });
  }
  render() {
    if (this.state.pageNo === 1) {
      return (
        <div className="Board-body">
          <Header />
          <Card
            onClick={() => this.onLogin()}
            nameUser={event => this.nameUser(event)}
          />
        </div>);
    } else if (this.state.pageNo === 2) {
      return (
        <div>
          <Header name={`Hello ${this.state.username}`} />
          <Questions />
        </div>
      );
    }
  }
}
export default Board;
