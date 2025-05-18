// src/components/MessageSlider.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function MessageSlider({
  messages = [],
  interval = 4000,     // time between slides (ms)
  slideDuration = 500, // slide animation time (ms)
  infinite = true,    // new prop: loop infinitely if true
  className = '',
}) {
  // Prepare slides; if infinite, append first slide for wrap-around
  const slides = infinite
    ? [...messages, messages[0] || '']
    : [...messages];

  const [index, setIndex] = useState(0);
  const [transitionOn, setTransitionOn] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Only start sliding if there's more than one message
    if (messages.length < 2) return;

    intervalRef.current = setInterval(() => {
      setIndex(i => i + 1);
      setTransitionOn(true);
    }, interval);

    return () => clearInterval(intervalRef.current);
  }, [messages.length, interval, infinite]);

  const handleTransitionEnd = () => {
    if (infinite) {
      // Infinite wrap: when reaching the duplicate slide, snap back to start
      if (index === messages.length) {
        setTransitionOn(false);
        setIndex(0);
      }
    } else {
      // Non-infinite: stop at last slide
      if (index >= slides.length - 1 && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  const trackStyle = {
    transform: `translateX(-${index * 100}%)`,
    transition: transitionOn
      ? `transform ${slideDuration}ms ease-in-out`
      : 'none',
  };

  return (
    <div
      className={`${className} relative overflow-hidden`}
      style={{ height: '2rem' /* adjust to your text size */ }}
    >
      <div
        className="flex w-full h-full"
        style={trackStyle}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((msg, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-full flex justify-center items-center h-full"
          >
            <p className="font-bold">{msg}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
