import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';

// const Hello = ({ name }) => {
//   return (
//     <div>
//       Hello,
//       {name}
//     </div>
//   );
// };

// state: changing components. syntax:
class Hello extends Component {
  constructor(props) {
    // passing the parent properties
    super(props);
    // info changing in the lifetime of a component
    this.state = {
      clicked: true
    };
  }

  handleClick = () => {
    // change the state (toggle)
    this.setState({
      clicked: !this.state.clicked
    });
  }

  render() {
    // build and return html
    return (
      /*- use 'this' because you are inside the class
      - refer to the state (line 22)
      - add an event listener */
      <div className={this.state.clicked ? 'clicked' : null}
        onClick={this.handleClick}>
        Hello {this.props.name}
      </div>
    );
  }
}

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(<Hello name="World" />, root);
}
