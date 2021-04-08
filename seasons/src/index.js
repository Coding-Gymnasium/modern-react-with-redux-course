import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // initialize state with constructor 
  constructor(props) {
    super(props);
    this.state = { lat: null , errorMessage: '' };
  }

  // refactor to use componentDidMount() {}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }), 
      err => this.setState({ errorMessage: err.message })
    );
  }


  // React says we have to define render!!
  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading...</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

