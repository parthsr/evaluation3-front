import React from 'react';
import './YourScore.css';

class YourScore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: '',
    };
  }
  componentDidMount() {
    for (let i = 0; i < this.props.allScores.length; i++) {
      if (this.props.allScores[i].username === this.props.username) {
        this.setState({
          score: this.props.allScores[i].score,
        });
      }
    }
  }
  render() {
    const contentToDisplay = [];
    const scores = this.props.allScores;
    scores.sort((a, b) => a.value - b.value);
    console.log(scores);
    for (let i = 0; i < Math.min(this.props.allScores.length, 5); i++) {
      console.log(scores);
      const content = (
        <div className="YourScore-score">
          <p >{i + 1}.{scores[i].username}</p>
          <p >{scores[i].score}</p>
        </div>);
      contentToDisplay.push(content);
      // console.log(content);
    }
    return (
      <div>
        <p>{JSON.stringify(this.props.questions.length)}</p>
        <p>{this.state.score}</p>
        <div>
          {contentToDisplay}
        </div>
      </div>
    );
  }
}


export default YourScore;
