import React from "react";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/Screenshot 2026-05-11 142722.png";
import Navbar from "./Navbar";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section style={{ ...styles.hero, backgroundImage: `url(${heroBg})` }}>
      <div style={styles.overlay} />
      <Navbar />
      <div style={styles.content}>
        <h1 style={styles.heading}>
          <span style={styles.lineGold}>Indulge In Elegant</span>
          <span style={styles.lineWhite}>Dining Moments</span>
        </h1>
        <div style={styles.buttons}>
          <button style={styles.btn} onClick={() => navigate("/login")}>
            Login
          </button>
          <button style={styles.btn} onClick={() => navigate("/signup")}>
            Join Us
          </button>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.35)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "40px",
    textAlign: "center",
    padding: "0 20px",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  lineGold: {
    fontFamily: "Playfair Display, serif",
    fontSize: "clamp(32px, 5vw, 58px)",
    fontWeight: "400",
    fontStyle: "italic",
    color: "#c9a84c",
    lineHeight: 1.2,
  },
  lineWhite: {
    fontFamily: "Playfair Display, serif",
    fontSize: "clamp(36px, 5.5vw, 64px)",
    fontWeight: "700",
    color: "#ffffff",
    lineHeight: 1.2,
  },
  buttons: {
    display: "flex",
    gap: "24px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btn: {
    background: "linear-gradient(135deg, #c9a84c, #e2c97e)",
    color: "#1a1a1a",
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    fontSize: "14px",
    letterSpacing: "1.5px",
    padding: "12px 48px",
    borderRadius: "4px",
    cursor: "pointer",
    border: "none",
    transition: "opacity 0.2s",
  },
};
