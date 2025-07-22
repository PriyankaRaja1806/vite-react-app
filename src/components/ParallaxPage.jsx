import React from 'react';
import styles from './ParallaxPage.module.css';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';

function ParallaxPage() {
  return (
    <div>
      <div
        className={`${styles.parallax} ${styles.parallax1}`}
        style={{ backgroundImage: `url(${img9})` }}>
      
        <button className={styles['parallax-text']}>MOON</button>
      </div>

      <div className={styles.content}>
        <h2>Moonelle</h2>
        <p>
          Just like moons and like suns, with the certainty of tides, just like hopes springing high, still I’ll rise.
        </p>
      </div>

      <div
        className={`${styles.parallax} ${styles.parallax2}`}
        style={{ backgroundImage: `url(${img10})` }}>
      
        <button className={styles['parallax-text']}>MOUNTAINS</button>
      </div>

      <div className={styles['dark-section']}>
        <p>
          Crowned in snow, draped in shadow, the mountains speak without words—of stillness, strength, and eternity.
        </p>
      </div>

      <div
        className={`${styles.parallax} ${styles.parallax3}`}
        style={{ backgroundImage: `url(${img11})` }}
      >
        <button className={styles['parallax-text']}>Scroll Up</button>
      </div>

      <div className={styles['dark-section']}>
        <p>In the hush of night, the moon and mountains whisper to each other in silver and stone.</p>
      </div>

      <div
        className={`${styles.parallax} ${styles.parallax1}`}
        style={{ backgroundImage: `url(${img9})` }}
      >
        <button className={styles['parallax-text']}>COOL</button>
      </div>
    </div>
  );
}

export default ParallaxPage;
