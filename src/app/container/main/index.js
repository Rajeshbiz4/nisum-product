import React, { Component } from 'react'
import Header from '../header'
import DashBoard from '../Dashboard'

class Main extends Component {

  render() {
    return (
      <div>
         <Header />
         <DashBoard />
      </div>
    )
  }
}

Main.propTypes = {}

Main.defaultProps = {}

export default Main
