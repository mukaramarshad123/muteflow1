"use client";

import { useEffect, useState } from "react";

const SEQUENCE = [
  "m",
  "mu",
  "mut",
  "mute",
  "mute ",
  "mute f",
  "mute fl",
  "mute flo",
  "muteflow",
] as const;

type WordmarkProps = {
  animated?: boolean;
  className?: string;
};

export function Wordmark({ animated = true, className = "" }: WordmarkProps) {
  const [text, setText] = useState(() =>
    animated ? "" : "muteflow",
  );

  useEffect(() => {
    const preferReduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!animated || preferReduce) {
      setText("muteflow");
      return;
    }

    let index = 0;
    setText(SEQUENCE[0]);

    const id = window.setInterval(() => {
      index += 1;
      if (index >= SEQUENCE.length) {
        setText("muteflow");
        window.clearInterval(id);
        return;
      }
      setText(SEQUENCE[index]);
    }, 70);

    return () => window.clearInterval(id);
  }, [animated]);

  return (
    <span
      className={`font-sans text-[19px] font-extrabold tracking-tightest-2 text-text-primary ${className}`}
    >
      {text || "\u00a0"}
    </span>
  );
}
