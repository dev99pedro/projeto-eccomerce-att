import IMAGES from "../imagesExport/Index"
import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Style/main.scss'


const images = [
    IMAGES.img1,
    IMAGES.img2,
    IMAGES.img3,

];




const Main = () => {


    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        // Avança para a próxima imagem
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Altera a imagem a cada 3 segundos
  
      return () => {
        clearInterval(interval);
      };
    }, []);


    return (
        <div className="carousel">
        <img
          src={images[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          className="carousel-image"
        />
      </div>
    )
}


export default Main