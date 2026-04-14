import Button from '../ui/Button/Button';
import SectionHeader from '../ui/SectionHeader/SectionHeader';
import styles from './ServicosSection.module.css';

const benefits = [
  'Integração entre contabilidade e financeiro.',
  'Mais previsibilidade para decisões de crescimento.',
  'Menos retrabalho entre escritório e empresa.',
  'Acompanhamento próximo com linguagem clara.',
];

export default function ServicosSection() {
  return (
    <section className={styles.hero}>
      <div className="container-main">
        <div className={styles.heroGrid}>
          <SectionHeader
            eyebrow="Serviços"
            title={
              <>
                Estrutura contábil e financeira
                <br />
                feita para empresas em crescimento.
              </>
            }
            subtitle="Atuamos com contabilidade empresarial, BPO financeiro, planejamento tributário e abertura de empresas, sempre com a mesma linguagem visual e estratégica da Home."
          />

          <div className={styles.heroPanel}>
            <p className={styles.heroPanelLabel}>Foco principal</p>
            <ul className={styles.benefits} role="list">
              {benefits.map((benefit) => (
                <li key={benefit} className={styles.benefitItem}>
                  <span className={styles.benefitIcon} aria-hidden="true">
                    <i className="bi bi-check2" />
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className={styles.heroPanelActions}>
              <Button to="/contato">
                Solicitar proposta
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </Button>
              <Button to="/" variant="ghost">
                Voltar para home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
