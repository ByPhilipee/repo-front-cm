import styles from './ComoAtuamos.module.css';

export default function ProcessStepCard({ number, title, text }) {
  return (
    <article className={styles.stepCard} role="listitem">
      <div className={styles.stepNumber}>{number}</div>
      <h3 className={styles.stepTitle}>{title}</h3>
      <p className={styles.stepText}>{text}</p>
    </article>
  );
}
