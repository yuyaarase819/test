import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <p> Hello React2!</p>;
  }
}

alert("spp2");

render(<App/>, document.getElementById('example'));
