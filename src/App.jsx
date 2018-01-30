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
      <table>
        <thead>
          <tr>
            <th>Planet Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th>Residents</th>
            <th>Films</th>
          </tr>
        </thead>
        {
          items.map(item => (
            <tr>
              <th>{item.name}</th>
              <th>{item.rotation_period}</th>
              <th>{item.orbital_period}</th>
              <th>{item.diameter}</th>
              <th>{item.climate}</th>
              <th>{item.gravity}</th>
              <th>{item.terrain}</th>
              <th>{item.surface_water}</th>
              <th>{item.population}</th>
              <th>{item.residents}</th>
              <th>{item.films}</th>
            </tr>
          ))
        }
      </table>
    );
  }
}

export default App;
