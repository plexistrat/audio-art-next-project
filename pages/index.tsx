import styles from "../styles/Home.module.css";
import Collection from "./components/Collection/Collection";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.hero} id="home">
        <div>
          <h1>
            Handcrafted <span>Perfection</span>
            for Discerning Ears
          </h1>

          <p>
            Each AUDIO ART amplifier is meticulously built by master craftsmen
            using only the finest components. Experience sound as it was meant
            to be heard—pure, warm, and incredibly detailed. Our heritage of
            audio excellence spans four decades, with each piece individually
            numbered and signed.
          </p>
          <div>
            <button>Explore Collection</button>
          </div>
        </div>
      </div>
      <Collection />
    </>
  );
}
