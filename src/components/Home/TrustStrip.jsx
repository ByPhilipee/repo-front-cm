import { trustPartners } from '../../utils/site';
import styles from './TrustStrip.module.css';

export default function TrustStrip() {
  return (
    <section className={styles.trustStrip} aria-label="Empresas que confiam na C&M">
      <div className="container-main">
        <p className={styles.trustLabel}>Empresas que crescem com a C&amp;M</p>
        <ul className={styles.trustLogos} role="list" aria-label="Clientes">
          {trustPartners.map((partner) => (
            <li key={partner} className={styles.trustLogoItem} role="listitem">
              {partner}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}