import Carousel from 'react-bootstrap/Carousel';
import img1 from "../img/Screenshot (371)_2.png"
import img2 from "../img/Add a heading.png"
import img3 from "../img/ubc.jpeg"
import '../components/Carousel'
export default function CarouselNew() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

