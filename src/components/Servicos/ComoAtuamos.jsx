import SectionHeader from '../ui/SectionHeader/SectionHeader';
import ProcessStepCard from './ProcessStepCard';
import styles from './ComoAtuamos.module.css';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    text: 'Entendemos estrutura fiscal, financeiro e objetivos do negócio.',
  },
  {
    number: '02',
    title: 'Plano de ação',
    text: 'Organizamos processos, prioridades e entregas de forma prática.',
  },
  {
    number: '03',
    title: 'Execução',
    text: 'Assumimos rotinas com acompanhamento próximo e comunicação objetiva.',
  },
  {
    number: '04',
    title: 'Acompanhamento contínuo',
    text: 'Monitoramos o resultado e ajustamos a operação conforme a empresa cresce.',
  },
];

export default function ComoAtuamos() {
  return (
    <section className={styles.section}>
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
          {steps.map((step) => (
            <ProcessStepCard key={step.number} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
