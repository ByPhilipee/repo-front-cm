import Button from '../ui/Button/Button';
import styles from './ProximoPasso.module.css';

export default function ProximoPasso() {
  return (
    <section className={styles.section}>
      <div className="container-main">
        <div className={styles.inner}>
          <div>
            <p className={styles.eyebrow}>Próximo passo</p>
            <h2 className={styles.title}>Quer montar a estrutura ideal para sua empresa?</h2>
            <p className={styles.text}>
              Fale com a nossa equipe e receba uma orientação inicial sobre o que faz sentido para
              o seu estágio atual.
            </p>
          </div>

          <Button to="/contato">
            Falar com especialista
            <i className="bi bi-calendar-check" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  );
}
