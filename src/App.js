import React, { Component } from 'react';
import {Navbar} from 'react-bootstrap'

class App extends Component {   



// componentDidMount() {
//   this.interval = setInterval(this.fetchWeather, 15000);
// }

  
  
  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">CatBook</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    );
  }
}



export default App

