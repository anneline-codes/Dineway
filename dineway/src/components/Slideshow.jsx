import { useState, useEffect } from "react";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import styles from "./Slideshow.module.css";

const slides = [slide1, slide2, slide3, slide4];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.wrapper}>
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Slide ${i + 1}`}
          className={styles.slide}
          style={{ opacity: i === current ? 1 : 0 }}
        />
      ))}

      <div className={styles.dots}>
        {slides.map((_, i) => (
          <button
            key={i}
            className={styles.dot}
            style={{
              background: i === current ? "#c9a84c" : "rgba(255,255,255,0.4)",
              transform: i === current ? "scale(1.3)" : "scale(1)",
            }}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        ›
      </button>
    </div>
  );
}

