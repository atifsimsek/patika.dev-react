import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { SliderSettings } from '@/types/sliderSettings';
import Image from 'next/image';
import { images } from '../../public/assets/images';

const HeroSection = () => {
  // Set up slider settings
  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //Styles for box
  const box = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'rgba(19, 18, 18, 0.350)',
    inset: 0,
    zIndex: 5,
    marginBottom: 1,
  };

  return (
    <>
      {/* Slider */}
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            component="div"
            sx={{
              position: 'relative',
              width: '100%',
              pt: '30%',
            }}
          >
            {/* Add a semi-transparent overlay on top of the image */}
            <Box
              sx={{
                ...box,
              }}
            />
            <Image
              src={image}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                inset: 0,
                objectFit: 'cover',
              }}
              alt="slide"
            />
          </Box>
        ))}
      </Slider>
    </>
  );
};

export default HeroSection;
