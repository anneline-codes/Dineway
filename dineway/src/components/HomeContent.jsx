import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tornPaper from "../assets/tornpaper.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import styles from "./HomeContent.module.css";

const slides = [slide1, slide2, slide3, slide4];

export default function HomeContent() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={styles.tornWrapper}>
        <img src={tornPaper} alt="" className={styles.tornImg} aria-hidden="true" />
        <div className={styles.ctaInner}>
          <p className={`${styles.ctaText} cta-text`}>
            Discover unforgettable flavors, refined ambiance, and exceptional service
            crafted to make every visit feel extraordinary.
          </p>
          <div className={`${styles.ctaButtons} cta-buttons`}>
            <button className={styles.btnPrimary} onClick={() => navigate("/dashboard")}>
              Reserve Your Table &nbsp;→
            </button>
            <button className={styles.btnOutline} onClick={() => navigate("/explore")}>
              <span className={styles.btnOutlineIcon}>→</span> Explore More
            </button>
          </div>
        </div>
      </div>

      <section className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          <p className={`${styles.aboutText} about-text`}>
            At Dineway, we craft luxurious culinary<br />
            experiences with gourmet flavors,<br />
            elegant spaces, and unforgettable service.
          </p>
          <div className={`${styles.aboutImgWrap} about-slideshow`}>
            {slides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i + 1}`}
                className={styles.slideImg}
                style={{ opacity: i === current ? 1 : 0 }}
              />
            ))}
            <div className={styles.slideDots}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={styles.dot}
                  style={{
                    background: i === current ? "#c9a84c" : "rgba(255,255,255,0.35)",
                    transform: i === current ? "scale(1.3)" : "scale(1)",
                  }}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

