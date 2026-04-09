import React, { useState, useEffect } from 'react';

const phrases = ["Build & Break 2.0"];
const TYPING_SPEED = 130;
const PAUSE_AFTER_PHRASE = 3000;
const DELETE_SPEED = 80;
const PAUSE_BEFORE_NEXT_PHRASE = 800;

export function TypewriterHeading() {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[loopNum % phrases.length];

    if (isDeleting) {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
        }, DELETE_SPEED);
      } else {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        timer = setTimeout(() => {}, PAUSE_BEFORE_NEXT_PHRASE);
      }
    } else {
      if (displayedText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
        }, TYPING_SPEED);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_AFTER_PHRASE);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum]);

  return (
    <span className="block min-w-[300px] sm:min-w-[480px] md:min-w-[700px] min-h-[1.2em]">
      <span>{displayedText}</span>
      <span className="cursor-blink">_</span>
    </span>
  );
}
