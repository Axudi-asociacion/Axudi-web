import { useEffect, useRef, useState } from 'react';

import './TypewriterText.scss';

function TypewriterText({ text, as: Tag = 'span', className = '' }) {
  const elementRef = useRef(null);
  const [characterIndex, setCharacterIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const visibleText = text.slice(0, characterIndex);
  const isWriting = hasStarted && characterIndex < text.length;
  const isComplete = characterIndex >= text.length;

  // Escribe el texto una sola vez cuando entra en pantalla.
  useEffect(() => {
    const element = elementRef.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduceMotion) {
      window.requestAnimationFrame(() => {
        setCharacterIndex(text.length);
      });
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasStarted(true);
        observer.unobserve(element);
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.35,
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [text]);

  useEffect(() => {
    if (!hasStarted || isComplete) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setCharacterIndex((currentIndex) =>
        Math.min(currentIndex + 1, text.length)
      );
    }, 75);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [characterIndex, hasStarted, isComplete, text]);

  return (
    <Tag
      ref={elementRef}
      className={`typewriter-text ${isWriting ? 'typewriter-text--writing' : ''} ${
        isComplete ? 'typewriter-text--complete' : ''
      } ${className}`}
      aria-label={text}
    >
      <span aria-hidden="true">
        {visibleText}
      </span>
    </Tag>
  );
}

export default TypewriterText;
