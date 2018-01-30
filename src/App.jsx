/* eslint react/prefer-stateless-function: "off" */
/* global fetch */

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: { error.message }</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <ul>
        { items.map(item => (
          <li key={item.name}>
            {item.name} {item.rotation}
          </li>
        ))}
      </ul>
    );
  }
}

export default App;
