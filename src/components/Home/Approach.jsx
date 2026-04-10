import Button from '../ui/Button/Button';
import SectionHeader from '../ui/SectionHeader/SectionHeader';
import styles from './Approach.module.css';

const pillars = [
  {
    icon: 'bi-eye',
    title: 'Visão 360° em tempo real',
    text: 'Dashboards e relatórios para decisões rápidas, com leitura clara da operação financeira.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Compliance sem stress',
    text: 'Obrigações fiscais e trabalhistas em dia, com processos seguros e previsíveis.',
  },
  {
    icon: 'bi-gear',
    title: 'Processos automatizados',
    text: 'Rotinas financeiras mais leves com tecnologia aplicada de forma prática ao dia a dia.',
  },
  {
    icon: 'bi-people',
    title: 'Equipe dedicada',
    text: 'Um time próximo do negócio para acompanhar rotinas, dúvidas e oportunidades.',
  },
];

export default function Approach() {
  return (
    <section className={`section-padding ${styles.approach}`}>
      <div className="container-main">
        <div className={styles.valueGrid}>
          <div>
            <SectionHeader
              eyebrow="Nossa abordagem"
              title={
                <>
                  Contabilidade não é burocracia.
                  <br />
                  É estratégia.
                </>
              }
              subtitle="Integramos contabilidade, BPO financeiro e consultoria em uma visão unificada do seu negócio. Você tem um parceiro, não apenas um fornecedor."
            />
            <div className={styles.valueAction}>
              <Button to="/servicos">
                Conheça nossa metodologia
              </Button>
            </div>
          </div>

          <div className={styles.pillarsGrid} role="list" aria-label="Pilares da nossa abordagem">
            {pillars.map((pillar) => (
              <article key={pillar.title} className={styles.pillarCard} role="listitem">
                <div className={styles.pillarIcon} aria-hidden="true">
                  <i className={`bi ${pillar.icon}`} />
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}