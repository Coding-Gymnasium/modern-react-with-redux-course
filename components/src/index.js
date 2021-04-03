import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail 
        author="Sam" 
        image= {faker.image.avatar()} 
        timeAgo="Today at 4:45PM" 
        comment= {faker.lorem.sentence()}
      />
      <CommentDetail 
        author="Alex" 
        image= {faker.image.avatar()} 
        timeAgo="Today at 5:45PM" 
        comment= {faker.lorem.sentence()}
      />
      <CommentDetail 
        author="Jane" 
        image= {faker.image.avatar()} 
        timeAgo="Today at 3:45PM" 
        comment= {faker.lorem.sentence()}
      />
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
