import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import tornPaper from "../assets/tornpaper.png";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import styles from "./Explore.module.css";

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
    <div className={styles.page}>
      <div className={styles.heroBar}>
        <Navbar />
      </div>

      <section className={styles.overview}>
        <div className={styles.overviewHeader}>
          <div>
            <h2 className={styles.overviewTitle}>Overview</h2>
            <p className={styles.overviewSub}>Explore and Register your restaurant to get started</p>
          </div>
          <select className={styles.dropdown}>
            <option>Restaurants</option>
            <option>Hotels</option>
            <option>Cafes</option>
          </select>
        </div>

        <div className={styles.grid}>
          {restaurants.map((r, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.cardImg}>
                {r.img
                  ? <img src={r.img} alt={r.name} className={styles.cardImgEl} />
                  : <div className={styles.cardImgEmpty} />
                }
              </div>
              <div className={styles.cardFooter}>
                <span className={styles.cardName}>{r.name}</span>
                <button className={styles.registerBtn}>Register</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className={styles.tornWrapper}>
        <img src={tornPaper} alt="" className={styles.tornImg} aria-hidden="true" />
        <div className={styles.reviewsInner}>
          <h3 className={styles.reviewsTitle}>Customers Feedback</h3>
          <div className={styles.reviewsGrid}>
            {reviews.map((r, i) => (
              <div key={i} className={styles.reviewCard}>
                <p className={styles.reviewText}>"{r.text}"</p>
                <p className={styles.reviewAuthor}>{r.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className={styles.menuSection}>
        <button className={styles.menuBtn} onClick={() => navigate("/dashboard")}>
          View Menu
        </button>
      </section>

      <Footer />
    </div>
  );
}

