"use client";
import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target); // stops observing after reveal
      }
    });
  },
  { threshold: 0.15 }
);

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}