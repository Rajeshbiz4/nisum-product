import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import { parse } from 'query-string'
import { fetchProductAction } from './logic'
import { Loader, Product } from '../../components'

const styleObj = {
  padding: '10px',
  margin: '10px'
}

class DashBoard extends Component {
  constructor(props) {
    super(props);
    const q = parse(this.props.location.search)
    this.state = {
      query: q.q || ''
    };
  }

  componentDidMount() {
      this.props.fetchProductAction()
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
  }

  renderList() {
    console.log(this.props.products.data.groups)
    if (this.props.products && this.props.products.data && this.props.products.data.groups && this.props.products.data.groups.length) {
      return this.props.products.data.groups.map((item, index) => (
        <Product props={item} key={`product_${index}`}></Product>
      ))
    }
    return null
  }
  render() {
    return (
      <div style={styleObj}>
        <Loader loading={this.props.products.loading} error={this.props.products.error}>
          {this.renderList()}
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
