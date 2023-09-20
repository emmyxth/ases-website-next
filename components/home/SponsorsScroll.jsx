import React, { useRef, useEffect } from 'react';
import { Box } from '@mui/material';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

function SponsorsScroll() {
  const images = ['/media/haley-tran.png', "/media/charles_tsao.png", '/media/alex_lin.png']; // replace with your images
  const scrollRef = useRef();

  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  useEffect(() => {
    const scroll = () => {
      if (scrollRef.current) {
        const firstImage = scrollRef.current.firstChild;
        const firstImageDuplicate = firstImage.cloneNode(true);
        scrollRef.current.removeChild(firstImage);
        scrollRef.current.appendChild(firstImageDuplicate);
        scrollRef.current.scrollLeft = 0;
      }
    };

    const interval = setInterval(scroll, 1000); // adjust speed as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <Box ref={scrollRef} display="flex" flexDirection="row" overflow="auto" className="animate-scroll">
      {images.map((image, index) => (
        <motion.img key={index} src={image} style={{ scale }} className="animate-scroll"/>
      ))}
    </Box>
  );
}

export default SponsorsScroll;

