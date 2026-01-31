// src/components/ui/confetti.ts
"use client";

import confetti from "canvas-confetti";

export function shootConfetti() {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
  });
}
