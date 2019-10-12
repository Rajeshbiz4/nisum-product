import React, { Fragment } from 'react'

const Product = (props) => {
    console.log('product details', props)
  if (props) {
  return (
    <div style={{width : '33%'}}>
      Product Name : { props.props.name }
      <img src={props.props.hero.href} />
    </div>
  )
}
}

Product.propTypes = {
  
}
Product.defaultProps = {
}

export default Product