import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import tornPaper from "../assets/tornpaper.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

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
      {/* Torn paper section — image is the full-width divider, content sits inside */}
      <div style={styles.tornWrapper}>
        <img src={tornPaper} alt="" style={styles.tornImg} aria-hidden="true" />
        <div style={styles.ctaInner}>
          <p style={styles.ctaText} className="cta-text">
            Discover unforgettable flavors, refined ambiance, and exceptional service
            crafted to make every visit feel extraordinary.
          </p>
          <div style={styles.ctaButtons} className="cta-buttons">
            <button style={styles.btnPrimary} onClick={() => navigate("/dashboard")}>
              Reserve Your Table &nbsp;→
            </button>
            <button style={styles.btnOutline}>
              <span style={styles.btnOutlineIcon}>→</span> Explore More
            </button>
          </div>
        </div>
      </div>

      {/* About section */}
      <section style={styles.aboutSection}>
        <div style={styles.aboutInner}>
          <p style={styles.aboutText} className="about-text">
            At Dineway, we craft luxurious culinary<br />
            experiences with gourmet flavors,<br />
            elegant spaces, and unforgettable service.
          </p>
          <div style={styles.aboutImgWrap} className="about-slideshow">
            {slides.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i + 1}`}
                style={{
                  ...styles.slideImg,
                  opacity: i === current ? 1 : 0,
                }}
              />
            ))}
            <div style={styles.slideDots}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    ...styles.dot,
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

const styles = {
  tornWrapper: {
    position: "relative",
    width: "100%",
    lineHeight: 0,
  },
  tornImg: {
    width: "100%",
    height: "320px",
    display: "block",
    objectFit: "contain",
    objectPosition: "center",
  },
  ctaInner: {
    position: "absolute",
    top: "50%",
    left: "15%",
    transform: "translateY(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "28px",
    maxWidth: "600px",
    zIndex: 2,
  },
  ctaText: {
    fontFamily: "Lato, sans-serif",
    fontSize: "clamp(14px, 1.6vw, 18px)",
    color: "#ccc",
    lineHeight: 1.7,
    margin: 0,
  },
  ctaButtons: {
    display: "flex",
    gap: "32px",
    flexWrap: "wrap",
  },
  btnPrimary: {
    background: "#c9a84c",
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    fontSize: "14px",
    padding: "13px 28px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    marginRight: "40px",
  },
  btnOutline: {
    background: "transparent",
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontWeight: "600",
    fontSize: "14px",
    padding: "13px 28px",
    borderRadius: "4px",
    border: "1px solid #555",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  btnOutlineIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    border: "1px solid #888",
    fontSize: "12px",
  },
  aboutSection: {
    background: "#0d0d0d",
    padding: "80px 60px",
  },
  aboutInner: {
    maxWidth: "1000px",
    display: "flex",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
  },
  aboutText: {
    fontFamily: "Playfair Display, serif",
    fontSize: "clamp(18px, 2.2vw, 28px)",
    color: "#fff",
    lineHeight: 1.6,
    flex: 1,
    minWidth: "260px",
    margin: 0,
  },
  aboutImgWrap: {
    width: "260px",
    height: "200px",
    flexShrink: 0,
    borderRadius: "6px",
    overflow: "hidden",
    position: "relative",
  },
  slideImg: {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 1s ease-in-out",
  },
  slideDots: {
    position: "absolute",
    bottom: "8px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "6px",
    zIndex: 2,
  },
  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    padding: 0,
    transition: "background 0.3s, transform 0.3s",
  },
};
