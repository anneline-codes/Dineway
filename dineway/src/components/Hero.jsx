import { useNavigate } from "react-router-dom";
import heroBg from "../assets/homepagebackground.png";
import Navbar from "./Navbar";

const features = [
  {
    title: "Smart Dashboard",
    sub: "Real-time insights",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="2" width="10" height="10" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
        <rect x="16" y="2" width="10" height="10" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
        <rect x="2" y="16" width="10" height="10" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
        <rect x="16" y="16" width="10" height="10" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: "Easy Management",
    sub: "Streamline operations",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="2" width="18" height="24" rx="2" stroke="#c9a84c" strokeWidth="1.5"/>
        <line x1="9" y1="9" x2="19" y2="9" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="14" x2="19" y2="14" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="9" y1="19" x2="15" y2="19" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Happy Customers",
    sub: "Deliver exceptional service",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#c9a84c" strokeWidth="1.5"/>
        <path d="M9 16s1.5 3 5 3 5-3 5-3" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10.5" cy="12" r="1.2" fill="#c9a84c"/>
        <circle cx="17.5" cy="12" r="1.2" fill="#c9a84c"/>
      </svg>
    ),
  },
  {
    title: "Business Growth",
    sub: "Scale faster",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <polyline points="3,22 9,14 14,18 20,8 25,4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="20,4 25,4 25,9" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="3" y1="25" x2="25" y2="25" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section style={{ ...styles.hero, backgroundImage: `url(${heroBg})` }}>
      <div style={styles.overlay} />
      <Navbar logoClass="hero-logo" />

      <div style={styles.content}>
        <h1 style={styles.heading} className="hero-heading">
          <span style={styles.lineGold}>Indulge In Elegant</span>
          <span style={styles.lineWhite}>Dining Moments</span>
        </h1>

        <p style={styles.welcome} className="hero-welcome">Welcome Back, Cynthia 🙂</p>
      </div>

      {/* Feature bar pinned to bottom of hero */}
      <div style={styles.featureBar} className="hero-featurebar">
        {features.map((f, i) => (
          <div key={f.title} style={styles.featureItem}>
            {i > 0 && <div style={styles.divider} />}
            <div style={styles.featureIcon}>{f.icon}</div>
            <div>
              <p style={styles.featureTitle}>{f.title}</p>
              <p style={styles.featureSub}>{f.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  hero: {
    position: "relative",
    width: "100%",
    minHeight: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.45)",
  },
  content: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "0 60px",
    width: "100%",
    maxWidth: "700px",
    textAlign: "center",
  },
  heading: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    margin: 0,
  },
  lineGold: {
    fontFamily: "Playfair Display, serif",
    fontSize: "clamp(32px, 4.5vw, 56px)",
    fontWeight: "400",
    fontStyle: "italic",
    color: "#c9a84c",
    lineHeight: 1.2,
  },
  lineWhite: {
    fontFamily: "Playfair Display, serif",
    fontSize: "clamp(36px, 5vw, 62px)",
    fontWeight: "700",
    color: "#ffffff",
    lineHeight: 1.2,
  },
  welcome: {
    fontFamily: "Lato, sans-serif",
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
    margin: 0,
  },
  featureBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    background: "rgba(0,0,0,0.55)",
    padding: "18px 40px",
    flexWrap: "wrap",
    gap: "8px",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  divider: {
    width: "1px",
    height: "36px",
    background: "#444",
    marginRight: "10px",
  },
  featureIcon: {
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  },
  featureTitle: {
    fontFamily: "Lato, sans-serif",
    fontSize: "13px",
    fontWeight: "700",
    color: "#fff",
    margin: 0,
  },
  featureSub: {
    fontFamily: "Lato, sans-serif",
    fontSize: "11px",
    color: "#aaa",
    margin: 0,
  },
};
