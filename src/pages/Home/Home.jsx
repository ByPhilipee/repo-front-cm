import Button from '../../components/ui/Button/Button';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import ServiceCard from '../../components/ui/ServiceCard/ServiceCard';
import MetricCard from '../../components/ui/MetricCard/MetricCard';
import TestimonialCard from '../../components/ui/TestimonialCard/TestimonialCard';
import { trustPartners } from '../../utils/site';
import styles from './Home.module.css';

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

const services = [
  {
    number: '01',
    icon: 'bi-calculator',
    title: 'Contabilidade Completa',
    text: 'Escrituração contábil e fiscal, apuração de impostos, balanço e DRE com precisão e prazo.',
    tags: ['SPED', 'DRE', 'Balanço'],
  },
  {
    number: '02',
    icon: 'bi-bank',
    title: 'BPO Financeiro',
    text: 'Contas a pagar, receber, conciliação bancária e fluxo de caixa com visão gerencial.',
    tags: ['Fluxo de caixa', 'Conciliação', 'Relatórios'],
  },
  {
    number: '03',
    icon: 'bi-graph-up-arrow',
    title: 'Planejamento Tributário',
    text: 'Estratégias legais para reduzir carga tributária com segurança e melhor enquadramento.',
    tags: ['Simples Nacional', 'Lucro Presumido', 'Lucro Real'],
  },
  {
    number: '04',
    icon: 'bi-building',
    title: 'Abertura de Empresas',
    text: 'Apoio na abertura, enquadramento e estruturação inicial do negócio com organização.',
    tags: ['CNPJ', 'Contrato social', 'Regime ideal'],
  },
  {
    number: '05',
    icon: 'bi-file-earmark-text',
    title: 'Rotinas Fiscais',
    text: 'Emissão, conferência e controle de documentos fiscais integrados ao seu processo.',
    tags: ['NF-e', 'NFS-e', 'Controle'],
  },
  {
    number: '06',
    icon: 'bi-lightbulb',
    title: 'Consultoria Financeira',
    text: 'Indicadores, projeções e apoio estratégico para crescimento com mais clareza.',
    tags: ['KPIs', 'Forecast', 'DRE'],
  },
];

const metrics = [
  {
    value: '+120',
    label: 'Empresas atendidas em todo o Brasil',
  },
  {
    value: '10+',
    label: 'Anos de experiência no mercado',
  },
  {
    value: '98%',
    label: 'Taxa de retenção de clientes ao ano',
  },
  {
    value: 'R$0',
    label: 'Em multas fiscais para nossos clientes desde 2020',
  },
];

const testimonials = [
  {
    initials: 'RC',
    quote:
      'A C&M transformou a forma como enxergamos as finanças da empresa. Hoje temos clareza e tranquilidade para crescer.',
    name: 'Ricardo Cunha',
    role: 'CEO - Meridian Consultoria',
  },
  {
    initials: 'AL',
    quote:
      'Desde que contratamos o BPO financeiro, nossa equipe interna se concentra apenas no core do negócio. Excelente custo-benefício.',
    name: 'Ana Lima',
    role: 'Sócia-Diretora - Luminar Saúde',
  },
  {
    initials: 'FM',
    quote:
      'O planejamento tributário reduziu nossa carga em 23%. Foi um divisor de águas para a operação.',
    name: 'Felipe Moraes',
    role: 'Fundador - Porto Logística',
  },
];

const steps = [
  {
    number: '1',
    title: 'Diagnóstico gratuito',
    text: 'Entendemos a empresa, a estrutura fiscal e os desafios atuais sem compromisso.',
  },
  {
    number: '2',
    title: 'Proposta personalizada',
    text: 'Desenhamos um plano sob medida para o porte e estágio do seu negócio.',
  },
  {
    number: '3',
    title: 'Onboarding estruturado',
    text: 'Transição organizada e documentada, com segurança nos dados desde o início.',
  },
  {
    number: '4',
    title: 'Gestão contínua',
    text: 'Monitoramento ativo, relatórios regulares e acompanhamento próximo da operação.',
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="hero-headline">
        <div className={styles.heroBgGrid} aria-hidden="true" />
        <div className={styles.heroBgGlow} aria-hidden="true" />
        <div className={styles.heroRule} aria-hidden="true" />

        <div className="container-main">
          <div className={styles.heroInner}>
            <div className={styles.heroText}>
              <p className={styles.heroEyebrow}>
                <span className={styles.heroEyebrowLine} aria-hidden="true" />
                Contabilidade & BPO Financeiro
              </p>

              <h1 id="hero-headline" className={styles.heroHeadline}>
                Gestão que libera
                <br />
                <em>o potencial</em>
                <br />
                da sua empresa.
              </h1>

              <p className={styles.heroSubheadline}>
                Assumimos a complexidade financeira e contábil do seu negócio para que você foque
                no que realmente importa: crescer com consistência e decisões mais seguras.
              </p>

              <div className={styles.heroActions}>
                <Button to="/contato">
                  Solicitar diagnóstico gratuito
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </Button>
                <Button to="/servicos" variant="ghost">
                  Ver todos os serviços
                </Button>
              </div>

              <div className={styles.heroStats} role="list" aria-label="Números que nos definem">
                <div role="listitem">
                  <p className={styles.heroStatValue}>+120</p>
                  <p className={styles.heroStatLabel}>Empresas atendidas</p>
                </div>
                <div role="listitem">
                  <p className={styles.heroStatValue}>98%</p>
                  <p className={styles.heroStatLabel}>Taxa de retenção</p>
                </div>
                <div role="listitem">
                  <p className={styles.heroStatValue}>10+</p>
                  <p className={styles.heroStatLabel}>Anos de expertise</p>
                </div>
              </div>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.heroCard}>
                <div className={styles.heroCardFloat}>
                  <div className={styles.heroCardFloatIcon}>
                    <i className="bi bi-shield-check" />
                  </div>
                  <div className={styles.heroCardFloatText}>
                    Compliance
                    <br />
                    garantido
                  </div>
                </div>

                <div className={styles.heroCardHeader}>
                  <span className={styles.heroCardTitle}>Visão Financeira</span>
                  <span className={styles.heroCardBadge}>● Ao vivo</span>
                </div>

                <div className={styles.heroCardMetric}>
                  <div className={styles.heroCardMetricValue}>R$ 842.300</div>
                  <div className={styles.heroCardMetricChange}>
                    <i className="bi bi-graph-up-arrow" />
                    +18,4% em relação ao mês anterior
                  </div>
                </div>

                <div className={styles.heroCardChart} aria-label="Gráfico de receita mensal">
                  <div className={styles.heroCardBar} style={{ '--bar-h': '52%' }} />
                  <div className={styles.heroCardBar} style={{ '--bar-h': '68%' }} />
                  <div className={styles.heroCardBar} style={{ '--bar-h': '44%' }} />
                  <div className={styles.heroCardBar} style={{ '--bar-h': '80%' }} />
                  <div className={styles.heroCardBar} style={{ '--bar-h': '61%' }} />
                  <div className={styles.heroCardBar} style={{ '--bar-h': '90%' }} />
                  <div className={styles.heroCardBar} style={{ '--bar-h': '75%' }} />
                </div>

                <div className={styles.heroCardKpis}>
                  <div className={styles.heroCardKpi}>
                    <div className={styles.heroCardKpiLabel}>Margem Líquida</div>
                    <div className={styles.heroCardKpiValue}>24,1%</div>
                  </div>
                  <div className={styles.heroCardKpi}>
                    <div className={styles.heroCardKpiLabel}>A Receber</div>
                    <div className={styles.heroCardKpiValue}>R$ 93k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="section-padding">
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
                  <i className="bi bi-arrow-right" aria-hidden="true" />
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

      <section className={styles.servicesSection} aria-labelledby="services-title">
        <div className="container-main">
          <SectionHeader
            eyebrow="Nossos serviços"
            title={
              <>
                Soluções integradas
                <br />
                para cada etapa do seu crescimento.
              </>
            }
            subtitle="Da escrituração ao planejamento estratégico - tudo em um único escritório especializado."
          />

          <div className={styles.servicesGrid} role="list" aria-label="Serviços oferecidos">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} role="listitem" />
            ))}
          </div>

          <div className={styles.servicesAction}>
            <Button to="/servicos" variant="ghost">
              Ver tabela completa de serviços
              <i className="bi bi-arrow-right" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding surface-light" aria-labelledby="authority-title">
        <div className="container-main">
          <SectionHeader eyebrow="Resultados concretos" title="Números que falam por nós." />

          <div className={styles.authorityGrid}>
            <div className={styles.metricsGrid} role="list" aria-label="Métricas de desempenho">
              {metrics.map((metric) => (
                <div key={metric.label} role="listitem">
                  <MetricCard value={metric.value} label={metric.label} />
                </div>
              ))}
            </div>

            <div className={styles.testimonialStack} role="list" aria-label="Depoimentos de clientes">
              {testimonials.map((testimonial) => (
                <div key={testimonial.name} role="listitem">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" aria-labelledby="process-title">
        <div className="container-main">
          <SectionHeader
            align="center"
            eyebrow="Como trabalhamos"
            title={
              <>
                Do primeiro contato
                <br />
                à gestão contínua.
              </>
            }
            subtitle="Um processo claro e eficiente para que a transição seja simples e o resultado, imediato."
          />

          <div className={styles.processSteps} role="list" aria-label="Etapas do processo">
            {steps.map((step) => (
              <div key={step.number} className={styles.processStep} role="listitem">
                <div className={styles.processCircle} aria-hidden="true">
                  {step.number}
                </div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processText}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

            <div className={styles.ctaActions}>
              <Button to="/contato">
                Agendar diagnóstico gratuito
                <i className="bi bi-calendar-check" aria-hidden="true" />
              </Button>
              <Button href="https://wa.me/message/5R23HSIBPPADA1" variant="ghost">
                <i className="bi bi-whatsapp" aria-hidden="true" />
                WhatsApp direto
              </Button>
              <p className={styles.ctaNote}>Retorno em até 24 horas úteis.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
