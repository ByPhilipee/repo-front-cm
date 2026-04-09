import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ quote, name, role, initials }) {
  return (
    <blockquote className={styles.card}>
      <p className={styles.quote}>{quote}</p>
      <footer className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">
          {initials}
        </div>
        <div>
          <cite className={styles.name}>{name}</cite>
          <p className={styles.role}>{role}</p>
        </div>
        <div className={styles.stars} aria-label="5 estrelas">
          ★★★★★
        </div>
      </footer>
    </blockquote>
  );
}

