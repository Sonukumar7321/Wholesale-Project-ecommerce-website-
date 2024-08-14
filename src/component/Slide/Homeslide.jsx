import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../Banner/slide1.jpg'
import slide2 from '../Banner/slide2.jpg'
import slide3 from '../Banner/slide3.jpg'
import './Slider.css'


function HomeSlider() {
    return (
        <Carousel>
            <Carousel.Item interval={500}>
                <img className="slide-img" src={slide1} alt="First slide" />
                <Carousel.Caption>
                <h3 className='slide-label'>Best Quality Product</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img className="slide-img"src={slide2} alt="Seond slide" />                
                <Carousel.Caption>
                    <h3 className='slide-label'>Grown Organically</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item  interval={500}>
                <img className="slide-img" src={slide3} alt="Thired slide" />
                <Carousel.Caption>
                    <h3 className='slide-label'>Take and Make Healthy</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default HomeSlider;