import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Card extends Component {
  render() {
    return (
      //multiple elements can be returned with React.Fragment
      <React.Fragment>
        <Element1 />
        <Element2 />
      </React.Fragment>
    );
  }
}

const card = document.getElementById('card');
if (card) {
  ReactDOM.render(<Card />, card);
}
