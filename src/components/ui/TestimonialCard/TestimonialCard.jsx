import styles from './TestimonialCard.module.css';

export default function TestimonialCard({ quote, name, role, initials }) {
  return (
    <blockquote className={`${styles.card} h-100 d-flex flex-column`}>
      <p className={styles.quote}>{quote}</p>

      <footer className={`${styles.author} mt-auto`}>
        <div className={styles.avatar} aria-hidden="true">
          {initials}
        </div>

        <div className="flex-grow-1">
          <cite className={styles.name}>{name}</cite>
          <p className={styles.role}>{role}</p>
        </div>


      </footer>
    </blockquote>
  );
}
