import React, { Component } from 'react'
import 'react-dropdown/style.css'
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(){
      super();
      this.state = {};
  }

  render() {
    return (
         <header className="App-header">
         <div className='header-container'>
          <h4>Products</h4>
         </div>
         </header>
    )
  }
}

Header.propTypes = {}

Header.defaultProps = {}

export default withRouter(Header)
