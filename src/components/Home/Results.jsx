import SectionHeader from '../ui/SectionHeader/SectionHeader';
import MetricCard from '../ui/MetricCard/MetricCard';
import TestimonialCard from '../ui/TestimonialCard/TestimonialCard';
import styles from './Results.module.css';

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

export default function Results() {
  return (
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
  );
}