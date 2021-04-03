import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author="Sam" 
          image= {faker.image.avatar()} 
          timeAgo="Today at 4:45PM" 
          comment= {faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Alex" 
          image= {faker.image.avatar()} 
          timeAgo="Today at 5:45PM" 
          comment= {faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author="Jane" 
          image= {faker.image.avatar()} 
          timeAgo="Today at 3:45PM" 
          comment= {faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  )
};

ReactDOM.render(<App />, document.querySelector('#root'));
