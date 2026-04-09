import Button from '../../components/ui/Button/Button';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard';
import styles from './Servicos.module.css';

const services = [
  {
    number: '01',
    icon: 'bi-calculator',
    title: 'Contabilidade empresarial',
    text: 'Escrituração contábil, fiscal e societária organizada para dar segurança e clareza à operação.',
    tags: ['Balanço', 'DRE', 'SPED'],
  },
  {
    number: '02',
    icon: 'bi-bank',
    title: 'BPO financeiro',
    text: 'Terceirização das rotinas financeiras com contas a pagar, receber, conciliação e caixa.',
    tags: ['Fluxo de caixa', 'Conciliação', 'Relatórios'],
  },
  {
    number: '03',
    icon: 'bi-graph-up-arrow',
    title: 'Planejamento tributário',
    text: 'Análise de enquadramento e oportunidades legais para reduzir carga tributária com segurança.',
    tags: ['Simples', 'Presumido', 'Real'],
  },
  {
    number: '04',
    icon: 'bi-building',
    title: 'Abertura de empresas',
    text: 'Apoio completo na abertura, regularização e escolha da estrutura adequada para o negócio.',
    tags: ['CNPJ', 'Contrato social', 'Regime tributário'],
  },
];

const benefits = [
  'Integração entre contabilidade e financeiro.',
  'Mais previsibilidade para decisões de crescimento.',
  'Menos retrabalho entre escritório e empresa.',
  'Acompanhamento próximo com linguagem clara.',
];

export default function Servicos() {
  return (
    <div className={styles.page}>
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

      <section className="section-padding surface-light">
        <div className="container-main">
          <SectionHeader
            eyebrow="O que entregamos"
            title="Serviços estruturados para o dia a dia da sua empresa."
            subtitle="Cada frente foi pensada para conversar com a mesma base de design da Home, reaproveitando cards, seções e botões."
          />

          <div className={styles.servicesGrid} role="list" aria-label="Serviços oferecidos">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} role="listitem" />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className="container-main">
          <SectionHeader
            align="center"
            eyebrow="Como atuamos"
            title={
              <>
                Da estruturação à rotina.
                <br />
                Um processo simples e consistente.
              </>
            }
            subtitle="O mesmo padrão da Home, aplicado a uma jornada de serviço clara e objetiva."
          />

          <div className={styles.stepsGrid} role="list" aria-label="Etapas do serviço">
            <article className={styles.stepCard} role="listitem">
              <div className={styles.stepNumber}>01</div>
              <h3 className={styles.stepTitle}>Diagnóstico</h3>
              <p className={styles.stepText}>Entendemos estrutura fiscal, financeiro e objetivos do negócio.</p>
            </article>
            <article className={styles.stepCard} role="listitem">
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.stepTitle}>Plano de ação</h3>
              <p className={styles.stepText}>Organizamos processos, prioridades e entregas de forma prática.</p>
            </article>
            <article className={styles.stepCard} role="listitem">
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.stepTitle}>Execução</h3>
              <p className={styles.stepText}>Assumimos rotinas com acompanhamento próximo e comunicação objetiva.</p>
            </article>
            <article className={styles.stepCard} role="listitem">
              <div className={styles.stepNumber}>04</div>
              <h3 className={styles.stepTitle}>Acompanhamento contínuo</h3>
              <p className={styles.stepText}>Monitoramos o resultado e ajustamos a operação conforme a empresa cresce.</p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container-main">
          <div className={styles.ctaInner}>
            <div>
              <p className={styles.ctaEyebrow}>Próximo passo</p>
              <h2 className={styles.ctaTitle}>Quer montar a estrutura ideal para sua empresa?</h2>
              <p className={styles.ctaText}>
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
    </div>
  );
}
