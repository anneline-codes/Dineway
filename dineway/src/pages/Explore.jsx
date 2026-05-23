import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tornPaper from "../assets/tornpaper.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

const restaurants = [
  { name: "M Hotel", img: slide1 },
  { name: "Chez Lando", img: slide2 },
  { name: "Cinomo Hotel", img: slide3 },
  { name: "Soy Restaurant", img: slide4 },
  { name: "Choose Kigali", img: slide1 },
  { name: "Burger Planet", img: null },
];

const reviews = [
  { text: "Absolutely unforgettable. Every dish was art, every moment felt luxurious.", author: "John M" },
  { text: "Absolutely unforgettable. Every dish was art, every moment felt luxurious.", author: "T.Bessie" },
  { text: "Absolutely unforgettable. Every dish was art, every moment felt luxurious.", author: "M.Laura" },
];

export default function Explore() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <div style={styles.heroBar}>
        <Navbar />
      </div>

      {/* Overview section */}
      <section style={styles.overview}>
        <div style={styles.overviewHeader}>
          <div>
            <h2 style={styles.overviewTitle}>Overview</h2>
            <p style={styles.overviewSub}>Explore and Register your restaurant to get started</p>
          </div>
          <select style={styles.dropdown}>
            <option>Restaurants</option>
            <option>Hotels</option>
            <option>Cafes</option>
          </select>
        </div>

        <div style={styles.grid}>
          {restaurants.map((r, i) => (
            <div key={i} style={styles.card}>
              <div style={styles.cardImg}>
                {r.img
                  ? <img src={r.img} alt={r.name} style={styles.cardImgEl} />
                  : <div style={styles.cardImgEmpty} />
                }
              </div>
              <div style={styles.cardFooter}>
                <span style={styles.cardName}>{r.name}</span>
                <button style={styles.registerBtn}>Register</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Torn paper + reviews */}
      <div style={styles.tornWrapper}>
        <img src={tornPaper} alt="" style={styles.tornImg} aria-hidden="true" />
        <div style={styles.reviewsInner}>
          <h3 style={styles.reviewsTitle}>Customers Feedback</h3>
          <div style={styles.reviewsGrid}>
            {reviews.map((r, i) => (
              <div key={i} style={styles.reviewCard}>
                <p style={styles.reviewText}>"{r.text}"</p>
                <p style={styles.reviewAuthor}>{r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View Menu CTA */}
      <section style={styles.menuSection}>
        <button style={styles.menuBtn} onClick={() => navigate("/dashboard")}>
          View Menu
        </button>
      </section>

      <Footer />
    </div>
  );
}

const styles = {
  page: {
    background: "#0d0d0d",
    minHeight: "100vh",
  },
  heroBar: {
    position: "relative",
    height: "160px",
    background: "#0d0d0d",
  },
  overview: {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 24px",
  },
  overviewHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "28px",
    flexWrap: "wrap",
    gap: "16px",
  },
  overviewTitle: {
    fontFamily: "Playfair Display, serif",
    fontSize: "22px",
    color: "#c9a84c",
    margin: "0 0 6px",
  },
  overviewSub: {
    fontFamily: "Lato, sans-serif",
    fontSize: "13px",
    color: "#888",
    margin: 0,
  },
  dropdown: {
    background: "#1e1e1e",
    border: "1px solid #333",
    borderRadius: "4px",
    color: "#ccc",
    fontFamily: "Lato, sans-serif",
    fontSize: "13px",
    padding: "8px 14px",
    cursor: "pointer",
    outline: "none",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
  },
  card: {
    background: "#161616",
    border: "1px solid #2a2a2a",
    borderRadius: "6px",
    overflow: "hidden",
  },
  cardImg: {
    width: "100%",
    height: "160px",
    overflow: "hidden",
  },
  cardImgEl: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardImgEmpty: {
    width: "100%",
    height: "100%",
    background: "#2a2a2a",
  },
  cardFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 14px",
  },
  cardName: {
    fontFamily: "Lato, sans-serif",
    fontSize: "13px",
    color: "#ddd",
  },
  registerBtn: {
    background: "none",
    border: "none",
    color: "#c9a84c",
    fontFamily: "Lato, sans-serif",
    fontSize: "12px",
    cursor: "pointer",
    padding: 0,
  },
  tornWrapper: {
    position: "relative",
    width: "100%",
    lineHeight: 0,
  },
  tornImg: {
    width: "100%",
    display: "block",
    objectFit: "contain",
  },
  reviewsInner: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "860px",
    zIndex: 2,
    textAlign: "center",
  },
  reviewsTitle: {
    fontFamily: "Playfair Display, serif",
    fontSize: "20px",
    color: "#c9a84c",
    marginBottom: "24px",
  },
  reviewsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
  },
  reviewCard: {
    background: "rgba(20,20,20,0.85)",
    border: "1px solid #2a2a2a",
    borderRadius: "6px",
    padding: "18px",
    textAlign: "left",
  },
  reviewText: {
    fontFamily: "Lato, sans-serif",
    fontSize: "13px",
    color: "#ccc",
    lineHeight: 1.6,
    marginBottom: "10px",
  },
  reviewAuthor: {
    fontFamily: "Lato, sans-serif",
    fontSize: "12px",
    color: "#c9a84c",
  },
  menuSection: {
    display: "flex",
    justifyContent: "center",
    padding: "60px 24px",
    background: "#0d0d0d",
  },
  menuBtn: {
    background: "transparent",
    border: "1px solid #555",
    color: "#fff",
    fontFamily: "Lato, sans-serif",
    fontWeight: "700",
    fontSize: "15px",
    padding: "14px 60px",
    borderRadius: "4px",
    cursor: "pointer",
    letterSpacing: "0.5px",
  },
};
