import React, { Component } from 'react';
import Interface from './Components/Interface.js'
import Title from './Components/Title.js'

class App extends Component {
  render() {
    return (
      <div >
        <Title />
        <Interface />
      </div>
    )
  }
}

export default App;