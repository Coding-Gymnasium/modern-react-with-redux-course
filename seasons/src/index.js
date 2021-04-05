import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // initialize state with constructor 
  constructor(props) {
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // we called state
        this.setState({ lat: position.coords.latitude });
      }, 
      (err) => console.log(err)
    );
  }
  // React says we have to define render!!
  render() {
    return <div>Latitude: {this.state.lat} </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

