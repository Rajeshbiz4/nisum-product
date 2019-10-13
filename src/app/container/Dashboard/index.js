import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { fetchProductAction } from './logic'
import { Loader, Product } from '../../components'

class DashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
      this.props.fetchProductAction()
  }

  renderList() {
    console.log(this.props.products.data.groups)
    if (this.props.products && this.props.products.data && this.props.products.data.groups && this.props.products.data.groups.length) {
      return this.props.products.data.groups.map((item, index) => (
        <div class="column">
        <Product props={item} key={`product_${index}`}></Product>
        </div>
      ))
    }
    return null
  }
  render() {
    return (
      <div class="wrapper">
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
