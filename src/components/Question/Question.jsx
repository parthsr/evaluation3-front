import React from 'react';
import './Question.css';
import Options from '../Options/Options';

const Question = (props) => {
  const option = props.question.options;
  console.log(props);
  const optionArray = option.split(',');
  console.log(optionArray);
  const contentToDisplay = [];
  for (let i = 0; i < optionArray.length - 1; i += 1) {
    const newcontentToDisplay =
         (<div className="option" key={new Date() + i}><Options option={optionArray[i]} /></div>);
    contentToDisplay.push(newcontentToDisplay);
  }
  return (
    <div>
      <p> {props.question.question}</p>
      <div>
        { contentToDisplay }
      </div>
    </div>
  );
};

export default Question;
