import React from 'react';
import './Question.css';
import Options from '../Options/Options';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOption: '',
    };
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState = {
      selectOption: event.target.value,
    };
    this.props.handleChange(event, this.props.question.questionid, this.props.qid);
    console.log('######', this.state.selectOption);
  }
  render() {
    console.log('********', this.state.selectOption);
    const option = this.props.question.options;
    const optionArray = option.split(',');

    const contentToDisplay = [];
    for (let i = 0; i < optionArray.length - 1; i += 1) {
      const newcontentToDisplay =
         (<div className="option" key={new Date() + i}>
           <Options
             handleChange={(event, id, id2) => { this.handleChange(event, id, id2); }}
             selectOption={this.state.selectOption}
             option={optionArray[i]}
           />
          </div>);
      contentToDisplay.push(newcontentToDisplay);
    }
    return (
      <div className="Question-div">
        <table>
          <td>
            <tr>Question {this.props.qid}</tr>
          </td>
          <tr >
            <td>
              <div className="Question-question">
                {this.props.question.question}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="Question-option">
                { contentToDisplay }
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Question;
