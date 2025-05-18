// src/components/MessageSlider.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function MessageSlider({
  messages = [],
  interval = 4000,     // time between slides (ms)
  slideDuration = 500, // slide animation time (ms)
  infinite = true,     // loop infinitely if true
  className = '',
}) {
  // If infinite, append a copy of the first slide at the end.
  const slides = infinite && messages.length > 1
    ? [...messages, messages[0]]
    : [...messages];

  const [index, setIndex] = useState(0);
  const [transitionOn, setTransitionOn] = useState(true);
  const intervalRef = useRef(null);

  // Advance the index on a regular interval
  useEffect(() => {
    if (messages.length < 2) return; // nothing to slide
    intervalRef.current = setInterval(() => {
      setTransitionOn(true);
      setIndex(i => i + 1);
    }, interval);
    return () => clearInterval(intervalRef.current);
  }, [messages.length, interval, infinite]);

  // Whenever index goes past the last real slide, reset instantly
  useEffect(() => {
    if (!infinite || messages.length < 2) return;

    // slides.length is messages.length + 1 in infinite mode
    if (index >= slides.length) {
      // turn off transitions, snap back to 0
      setTransitionOn(false);
      setIndex(0);
    }
  }, [index, infinite, messages.length, slides.length]);

  // Re-enable transitions immediately after snapping
  useEffect(() => {
    if (!transitionOn) {
      // next tick, re‑enable transitions
      const id = requestAnimationFrame(() => setTransitionOn(true));
      return () => cancelAnimationFrame(id);
    }
  }, [transitionOn]);

  const trackStyle = {
    transform: `translateX(-${index * 100}%)`,
    transition: transitionOn
      ? `transform ${slideDuration}ms ease-in-out`
      : 'none',
  };

  return (
    <div
      className={`${className} relative overflow-hidden`}
      style={{ height: '2rem' }} // adjust to your text size
    >
      <div
        className="flex w-full h-full"
        style={trackStyle}
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
