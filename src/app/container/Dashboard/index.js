import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { fetchProductAction } from './logic'
import { Loader, Product,Popup } from '../../components'

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {showPopup: false};
  }

  componentDidMount() {
      this.props.fetchProductAction()
  }

  togglePopup = (item) => {
    this.setState({  
         currentItem: item
    }, () => {
      this.setState({
        showPopup: !this.state.showPopup 
      })
    });  
   }  

  renderList() {
    if (this.props.products && this.props.products.data && this.props.products.data.groups && this.props.products.data.groups.length) {
      return this.props.products.data.groups.map((item, index) => (
        <div className="column" onClick={() => this.togglePopup(item)}>
          <Product props={item} key={`product_${index}`}></Product>
        </div>
      ))
    }
    return null;
  }

  render() {
    return (
      <div class="wrapper">
      {this.state.showPopup ?  
      <Popup images={this.state.currentItem.images}
             name={this.state.currentItem.name}
          closePopup={this.togglePopup.bind(this)}  
         />  
        : null  
}
        <Loader loading={this.props.products.loading} error={this.props.products.error}>
        <section class="columns">
          {this.renderList()}
          </section>
        </Loader>
      </div>
    )
  }
}

DashBoard.propTypes = {
  fetchProductAction: PropTypes.func,
  products: PropTypes.object.isRequired,
}

DashBoard.defaultProps = {
}

const mapStateToProps = state => ({
  products: state.products
})

export default withRouter(connect(mapStateToProps, { fetchProductAction })(DashBoard))
