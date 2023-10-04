"use client";
import React, { useState, useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const TypingText = ({ words, noDelete, textStyle }) => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTextRef = useRef(null);

  // Get the current word from the array
  const currentWord = words[wordIndex];

  // Intersection Observer callback function
  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      startTyping();
    }
  };

  const startTyping = () => {
    const typingSpeed = 100; // Adjust typing speed in milliseconds
    const deleteSpeed = 100; // Adjust deleting speed in milliseconds
    const delay = isDeleting ? deleteSpeed : typingSpeed;

    const timeoutId = setTimeout(() => {
      if (isDeleting && !noDelete) {
        setDisplayText((prevText) => prevText.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      } else {
        setDisplayText((prevText) => currentWord.slice(0, prevText.length + 1));
        if (displayText === currentWord) {
          setIsDeleting(true);
        }
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed to determine when the element is visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    // Create a local variable to store the current ref value
    const targetNode = typingTextRef.current;

    if (targetNode) {
      observer.observe(targetNode);
    }

    // Use the local variable in the cleanup function
    return () => {
      if (targetNode) {
        observer.unobserve(targetNode);
      }
    };
  }, [typingTextRef, handleIntersection]);

  return (
    <Box ref={typingTextRef} textAlign="center">
      <h1 style={textStyle}>{displayText}</h1>
    </Box>
  );
};

export default TypingText;
