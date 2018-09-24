import React from 'react';
import ReactDOM from 'react-dom';
import {Carousel, Item, Caption, Image} from 'react-bootstrap'


class Carouselz extends React.Component {

  render() {
    return (


      <Carousel style= {{marginRight: "10%", marginLeft:'50%', marginBottom:'40%',marginTop:'5%'}}>
        <Carousel.Item>
          <Image width={900} height={500} alt="900x500" src="https://drive.google.com/uc?export=view&id=1JGmtRC0EGRGfyzvUkDEf3OwE_4yTdjH5" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image width={900} height={500} alt="900x500" src="https://drive.google.com/uc?export=view&id=1JGmtRC0EGRGfyzvUkDEf3OwE_4yTdjH5" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image width={900} height={500} alt="900x500" src="https://drive.google.com/uc?export=view&id=1JGmtRC0EGRGfyzvUkDEf3OwE_4yTdjH5" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

    )
  }
}


export default Carouselz
