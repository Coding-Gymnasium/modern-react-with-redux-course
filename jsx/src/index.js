// import the React and ReacDom libraries
import React from 'react';
import ReactDom from 'react-dom';

// Create a react component
const App = () => {

  // const buttonText = 'Click Me!';
  const buttonText = { text: 'Click This!!!' };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDom.render( <App />, document.querySelector('#root'));

