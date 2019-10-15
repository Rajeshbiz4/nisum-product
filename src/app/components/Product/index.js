import React, { Fragment } from 'react'

const Product = (props) => {
    // console.log('product details', props)
  if (props) {
  return (
    <div>
      Product Name : { props.props.name }
      <img src={props.props.hero.href} />
      {/* priceRange : $ {props.props.priceRange.regular.low} - $ {props.props.priceRange.regular.high} */}
    </div>
  )
}
}

Product.propTypes = {
  
}
Product.defaultProps = {
}

export default Product