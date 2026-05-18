import React, { useEffect, useState } from "react";

const Loading = () => {
  const phrases = ["Loading your experience", "Just a moment", "Preparing the page"];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && letterIndex === currentPhrase.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && letterIndex === 0) {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        return;
      }

      setLetterIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [letterIndex, phraseIndex, isDeleting, phrases]);

  const displayText = phrases[phraseIndex].substring(0, letterIndex);

  return (
    <div className="w-full h-screen bg-primary flex justify-center items-center fixed top-0 left-0 z-[100]">
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="relative w-40 h-40">
          <svg viewBox="0 0 120 120" className="w-full h-full">
            <defs>
              <linearGradient id="loadingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" />
                <stop offset="100%" stopColor="#82e8eb" />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="52" stroke="rgba(255,255,255,0.12)" strokeWidth="10" fill="none" />
            <g className="loading-ring">
              <circle
                cx="60"
                cy="60"
                r="42"
                stroke="url(#loadingGradient)"
                strokeWidth="10"
                fill="none"
                strokeLinecap="round"
                strokeDasharray="110 188"
              />
            </g>
            <circle cx="60" cy="60" r="18" fill="#07101f" />
            <circle cx="60" cy="34" r="8" fill="#82e8eb" className="loading-dot" />
          </svg>
        </div>

        <h2 className="text-white font-poppins font-semibold text-2xl text-center tracking-wide min-h-[2.5rem]">
          {displayText}
          <span className="inline-block ml-2 h-[1.1em] w-[2px] rounded-sm bg-secondary animate-pulse" />
        </h2>
      </div>
    </div>
  );
};

export default Loading;
