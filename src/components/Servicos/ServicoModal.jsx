import { useEffect } from 'react';
import Button from '../ui/Button/Button';
import styles from './OQueEntregamos.module.css';

export default function ServicoModal({ service, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.classList.add('modal-open');
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  if (!service) return null;

  return (
    <div className={styles.modalOverlay} role="presentation" onClick={onClose}>
      <div
        className={styles.modalDialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className={styles.modalClose} onClick={onClose} aria-label="Fechar">
          <i className="bi bi-x-lg" />
        </button>

        <div className={styles.modalHeader}>
          <div>
            <p className={styles.modalEyebrow}>Serviço</p>
            <h3 id="service-modal-title" className={styles.modalTitle}>
              {service.title}
            </h3>
          </div>
        </div>

        <p className={styles.modalLead}>{service.fullDescription}</p>

        <div className={styles.modalGrid}>
          <div>
            <p className={styles.modalLabel}>O que inclui</p>
            <ul className={styles.modalList} role="list">
              {service.includes.map((item) => (
                <li key={item} className={styles.modalItem}>
                  <span className={styles.modalBullet} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.modalLabel}>Resultados esperados</p>
            <ul className={styles.modalList} role="list">
              {service.outcomes.map((item) => (
                <li key={item} className={styles.modalItem}>
                  <span className={styles.modalBullet} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.modalFooter}>
          <p className={styles.modalNote}>
            {service.note}
          </p>
          <Button to="/contato">Solicitar proposta</Button>
        </div>
      </div>
    </div>
  );
}
