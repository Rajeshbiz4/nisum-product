import React from 'react';  
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Carousel from 're-carousel'

class Popup extends React.Component {  
    constructor(props) {
        super(props);
      }
    
      componentDidMount() {
        //   console.log('componentDidMount', this.props.images);
      }

      renderImages = () =>{
        debugger
          return this.props.images.map((item, index)=>{
            return (<div key={index}>
            <img src={item.href} height={item.height} width={item.width}/>
            <p className="legend">{item.href}</p>
        </div>)
          })
      }
    
  render() {  
      console.log('this.props.images', this.props.images)
    return (  
    <div className='popup'>  
    <div className='popup\_inner'>  
    <h1>{this.props.text}</h1>  
    <button className='closeMe' onClick={this.props.closePopup}>Close</button>  
     {this.props.images && this.props.images.length ? <Carousel autoPlay={true} 
interval={5000}  infiniteLoop={true} showThumbs={false} >
                { this.renderImages()}
            </Carousel> : null}
    </div>  
    </div>  
    );  
 }  
}  

export default Popup;