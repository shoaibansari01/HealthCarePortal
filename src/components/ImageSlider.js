import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Create a CSS file for styling the slider

const ImageSlider = () => {
  // Array of image URLs
  const images = [
    require('../assets/Banner_image1.png'), // Replace with your actual image paths
    require('../assets/Banner_image2.png'),
  ];

  // State to keep track of the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Cycle back to the first image
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="image-slider">
      <img src={images[currentIndex]} alt="Slideshow" className="slider-image" />
    </div>
  );
};

export default ImageSlider;
