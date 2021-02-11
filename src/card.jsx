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

/* When running the ReactDOM.render() method, you can only pass in one value as
the first argument, which is the component to be rendered. However, you can create
more than one component instance at a time, by simply wrapping them inside of
another element, such as a <div>. For example, you could do the following to render two components,

ReactDOM.render(
  <div>
    <ComponentOne />
    <ComponentTwo />
  </div>,
  document.getElementById('app')
);

Another option is to create another component for the purpose of wrapping multiple components to render.*/
