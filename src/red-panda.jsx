import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const panda = {
  title: 'Cute Red Panda',
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width: '200px'
};

class RedPanda extends Component {
  render() {
    return (
      <div>
        <h1>{panda.title}</h1>
        <img
        src={panda.src}
        alt={panda.alt}
        width={panda.width}/>
      </div>
    )
  }
}

ReactDOM.render(
  <RedPanda />,
  document.getElementById('panda')
);
