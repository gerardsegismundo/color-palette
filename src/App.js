import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Palette from './Palette'
import seedColors from './seedColors'
import { generatePalette } from './ColorHelpers'

class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/palette/:id' />
        </Switch>

        <div>
          <Palette palette={generatePalette(seedColors[4])} />
        </div>
      </>
    )
  }
}

export default App
