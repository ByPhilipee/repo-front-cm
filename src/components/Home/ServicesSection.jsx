import Button from '../ui/Button/Button';
import SectionHeader from '../ui/SectionHeader/SectionHeader';
import ServiceCard from '../ui/ServiceCard/ServiceCard';
import styles from './ServicesSection.module.css';

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

export default function ServicesSection() {
  return (
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
          </Button>
        </div>
      </div>
    </section>
  );
}