import Button from '../ui/Button/Button';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.ctaSection} aria-labelledby="cta-title">
      <div className="container-main">
        <div className={styles.ctaInner}>
          <div className={styles.ctaText}>
            <p className={styles.ctaEyebrow}>
              <span>—</span>
              Próximo passo
            </p>
            <h2 id="cta-title" className={styles.ctaTitle}>
              Pronto para ter uma gestão financeira que realmente funciona?
            </h2>
            <p className={styles.ctaSub}>
              Agende uma conversa de 30 minutos com um dos nossos especialistas. Sem compromisso,
              sem pressa - só clareza sobre o que podemos fazer pelo seu negócio.
            </p>
          </div>

          <div className={`${styles.ctaActions} d-flex flex-column`}>
  <Button to="/contato" className="w-100">
    Agendar Reunião
  </Button>

  <Button
    href="https://wa.me/message/5R23HSIBPPADA1"
    variant="ghost"
    className="w-100"
  >
    WhatsApp
  </Button>
</div>
        </div>
      </div>
    </section>
  );
}