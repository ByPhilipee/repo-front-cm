import SectionHeader from '../ui/SectionHeader/SectionHeader';
import styles from './Process.module.css';

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

export default function Process() {
  return (
    <section className="section-padding" aria-labelledby="process-title">
      <div className="container-main">
        <SectionHeader
          align="center"
          eyebrow="Como trabalhamos"
          titleClassName="text-white"
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
  );
}