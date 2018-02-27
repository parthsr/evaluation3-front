import React from 'react';
import axios from 'axios';
import './Questions.css';
import Question from '../Question/Question';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: '',
    };
  }

  componentDidMount() {
    axios.get('/sendAll').then((response) => {
      if (Object.keys(response.data).length === 0) {
        axios.post('/getAll').then(() => {
          axios.get('/sendAll').then((responseInner) => {
            this.setState({
              questions: responseInner.data,
            });
          });
        });
      } else {
        console.log(response.data);
        this.setState({
          questions: response.data,
        });
      }
    });
    // axios.get('/sendAll').then((response) => {
    //   console.log(response.data);
    //   this.setState({
    //     questions: response.data,
    //   });
    // });
  }

  render() {
    const contentToDisplay = [];
    for (let i = 0; i < this.state.questions.length; i += 1) {
      const newcontentToDisplay =
         (<div className="Question" key={new Date() + i}><Question question={this.state.questions[i]} /></div>);
      contentToDisplay.push(newcontentToDisplay);
    }
    console.log(this.state.questions);
    return (
      <div>
        {contentToDisplay}
      </div>
    );
  }
}

export default Questions;
