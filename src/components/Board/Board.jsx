import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Card from '../Card/Card';
import Questions from '../Questions/Questions';
import YourScore from '../YourScore/YourScore';
import './Board.css';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      pageNo: 1,
      userInfo: '',
      scoresAll: '',
      questions: '',
    };
  }

  onLogin = () => {
    axios.post('/user', { username: this.state.username }).then((response) => {
      console.log(response.data);
      this.setState({
        pageNo: 2,
        userInfo: response.data,
      });
    });
  }

  setQuestions = (questions) => {
    console.log(questions);
    this.setState({
      questions,
    });
  }

  nameUser = (event) => {
    this.setState({
      username: event.target.value,
    });
  }
  bringScores = () => {
    axios.get('/getAllScores').then((response) => {
      console.log(response.data);
      this.setState({
        scoresAll: response.data,
        pageNo: 3,
      });
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
          <Questions username={this.state.username} setQuestions={(ques) => { this.setQuestions(ques); }} />
          <button onClick={() => this.bringScores()}>Calculate</button>
        </div>
      );
    }

    return (
      <div>
        <YourScore username={this.state.username}allScores={this.state.scoresAll} questions={this.state.questions} />
      </div>
    );
  }
}
export default Board;
