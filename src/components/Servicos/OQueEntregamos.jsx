import SectionHeader from '../ui/SectionHeader/SectionHeader';
import ServiceCard from '../ui/ServiceCard/ServiceCard';
import styles from './OQueEntregamos.module.css';

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

export default function OQueEntregamos() {
  return (
    <section className={styles.section}>
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
  );
}
