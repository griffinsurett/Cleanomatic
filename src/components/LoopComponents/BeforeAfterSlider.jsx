// src/components/BeforeAfterSlider.jsx
import React, { useRef, useState, useEffect } from 'react';

export default function BeforeAfterSlider({ item, className = '' }) {
  // 1️⃣ Extract just the URL string for each image
  const beforeSrc = item.data.beforeImage?.src;
  const afterSrc  = item.data.afterImage?.src;
  const altText   = item.data.title || item.slug || 'project-image';

  // 2️⃣ If either “before” or “after” is missing, don’t render anything
  if (!beforeSrc || !afterSrc) {
    return null;
  }

  // 3️⃣ dividerPct ranges from 0 → 1 (0 = all the way left; 1 = all the way right)
  const [dividerPct, setDividerPct] = useState(0.5);

  // 4️⃣ We need a ref to measure the container’s width for pointer calculations
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  // 5️⃣ Clamp helper to keep values between min and max
  const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

  // 6️⃣ Convert a clientX into [0..1] relative position inside the container
  const onPointerMove = (clientX) => {
    if (!isDragging.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let x = clamp(clientX - rect.left, 0, rect.width);
    setDividerPct(x / rect.width);
  };

  const handleMouseMove = (e) => onPointerMove(e.clientX);
  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      onPointerMove(e.touches[0].clientX);
    }
  };
  const handleMouseUp    = () => (isDragging.current = false);
  const handleTouchEnd   = () => (isDragging.current = false);
  const handleMouseDown  = () => (isDragging.current = true);
  const handleTouchStart = (e) => {
    e.preventDefault();
    isDragging.current = true;
  };

  // 7️⃣ Add/remove global listeners for dragging
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        /*
          Fix this container’s height/width ratio (16:9). Because
          both <img> tags inside are position:absolute + object-cover,
          they will never alter the parent’s layout. Only their clip-path changes.
        */
        paddingTop: '56.25%', // → 16:9 aspect ratio
      }}
    >
      {/*
        ──────────────────────────────────────────────────────────
        “AFTER” IMAGE: sits fully underneath (no clipping on this one).
        ──────────────────────────────────────────────────────────
      */}
      <img
        src={afterSrc}
        alt={`After: ${altText}`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          /*
            Clip the left side of the after-image so that
            only the region [dividerPct .. 1] is visible.
            That inset value = dividerPct * 100%.
            clip-path: inset(top, right, bottom, left)
          */
          clipPath: `inset(0 0 0 ${dividerPct * 100}%)`,
        }}
      />

      {/*
        ──────────────────────────────────────────────────────────
        “BEFORE” IMAGE: sits on top, clipped on its right side.
        ──────────────────────────────────────────────────────────
      */}
      <img
        src={beforeSrc}
        alt={`Before: ${altText}`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          /*
            Clip the right side of the before-image so that
            only the region [0 .. dividerPct] is visible.
            That right-inset = (1 - dividerPct) * 100%.
          */
          clipPath: `inset(0 ${(1 - dividerPct) * 100}% 0 0)`,
        }}
      />

      {/*
        ────────────────────────────────────────────────────────
        DRAG HANDLE: the square with two arrows, centered at dividerPct.
        ────────────────────────────────────────────────────────
      */}
      <div
        className="absolute top-1/2 flex items-center justify-center"
        style={{
          left:      `${dividerPct * 100}%`,
          transform: 'translate(-50%, -50%)',
          cursor:    'ew-resize',
          zIndex:    10,
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {/* 
          Square handle (bg-primary) with two chevrons in the center.
          You can tweak w-12/h-12 or rounded-sm to taste.
        */}
        <div className="bg-primary w-12 h-12 rounded-sm flex items-center justify-center shadow-lg">
          <span className="text-white text-xl select-none">{'<'}</span>
          <span className="text-white text-xl select-none ml-1.5">{'>'}</span>
        </div>
      </div>
    </div>
  );
}
