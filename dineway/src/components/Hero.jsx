import heroBg from "../assets/homepagebackground.png";
import Navbar from "./Navbar";
import styles from "./Hero.module.css";

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
] ;

export default function Hero() {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${heroBg})` }}>
      <div className={styles.overlay} />
      <Navbar logoClass="hero-logo" />

      <div className={styles.content}>
        <h1 className={`${styles.heading} hero-heading`}>
          <span className={styles.lineGold}>Indulge In Elegant</span>
          <span className={styles.lineWhite}>Dining Moments</span>
        </h1>
        <p className={`${styles.welcome} hero-welcome`}>Welcome Back, Cynthia 🙂</p>
      </div>

      <div className={`${styles.featureBar} hero-featurebar`}>
        {features.map((f, i) => (
          <div key={f.title} className={styles.featureItem}>
            {i > 0 && <div className={styles.divider} />}
            <div className={styles.featureIcon}>{f.icon}</div>
            <div>
              <p className={styles.featureTitle}>{f.title}</p>
              <p className={styles.featureSub}>{f.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
