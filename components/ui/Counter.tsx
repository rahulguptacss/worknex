'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  value: string;
  duration?: number; // duration in seconds
  delay?: number; // delay in seconds
  className?: string;
}

export default function Counter({
  value,
  duration = 2.2,
  delay = 0,
  className = '',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState<string>(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Parse value into prefix, numeric part, and suffix
    // e.g. "13+" -> prefix: "", num: 13, suffix: "+"
    // "500+" -> prefix: "", num: 500, suffix: "+"
    // "95%" -> prefix: "", num: 95, suffix: "%"
    const match = value.match(/^([^0-9.]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const prefix = match[1] || '';
    const targetNum = parseFloat(match[2]);
    const isDecimal = match[2].includes('.');
    const decimalPlaces = isDecimal ? match[2].split('.')[1].length : 0;
    const suffix = match[3] || '';

    // Show initial 0 state
    setDisplayValue(`${prefix}0${suffix}`);

    let animationFrameId: number;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const startDelayMs = delay * 1000;
          const durationMs = duration * 1000;
          let startTime: number | null = null;

          const animateCount = (timestamp: number) => {
            if (!startTime) startTime = timestamp + startDelayMs;

            if (timestamp < startTime) {
              animationFrameId = requestAnimationFrame(animateCount);
              return;
            }

            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / durationMs, 1);

            // Smooth cubic-out / expo-out deceleration curve
            // 1 - Math.pow(1 - progress, 3) for smooth natural deceleration
            const ease = 1 - Math.pow(1 - progress, 3);
            const currentNumber = ease * targetNum;

            const formatted = isDecimal
              ? currentNumber.toFixed(decimalPlaces)
              : Math.floor(currentNumber).toString();

            setDisplayValue(`${prefix}${formatted}${suffix}`);

            if (progress < 1) {
              animationFrameId = requestAnimationFrame(animateCount);
            } else {
              // Ensure exact final value is rendered
              setDisplayValue(`${prefix}${match[2]}${suffix}`);
            }
          };

          animationFrameId = requestAnimationFrame(animateCount);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, duration, delay]);

  return (
    <span ref={ref} className={`tabular-nums tracking-tight inline-block ${className}`}>
      {displayValue}
    </span>
  );
}

