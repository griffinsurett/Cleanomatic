// src/components/MessageSlider.jsx
import React, { useState, useEffect, useRef } from 'react';

export default function MessageSlider({
  messages = [],
  interval = 4000,    // time between slides (ms)
  slideDuration = 500,// slide animation time (ms)
  className = '',
}) {
  // we append the first message to the end to allow seamless wrap
  const slides = [...messages, messages[0] || ''];
  const [index, setIndex] = useState(0);
  const [transitionOn, setTransitionOn] = useState(true);

  useEffect(() => {
    if (messages.length < 2) return;
    const timer = setInterval(() => {
      setIndex(i => i + 1);
      setTransitionOn(true);
    }, interval);
    return () => clearInterval(timer);
  }, [messages.length, interval]);

  const handleTransitionEnd = () => {
    // when we've just animated into the duplicate slide, jump to real first
    if (index === messages.length) {
      setTransitionOn(false);  // disable transition for the instant reset
      setIndex(0);
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
