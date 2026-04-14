import styles from './OQueEntregamos.module.css';

export default function ServicoCard({ service, onClick }) {
  return (
    <button type="button" className={styles.serviceCard} onClick={onClick}>
      <span className={styles.iconWrap} aria-hidden="true">
        <i className={`bi ${service.icon}`} />
      </span>

      <span className={styles.cardContent}>
        <span className={styles.cardTitle}>{service.title}</span>
        <span className={styles.cardDescription}>{service.summary}</span>
      </span>
    </button>
  );
}
