import Hero from '../../components/Home/Hero';
import Approach from '../../components/Home/Approach';
import ServicesSection from '../../components/Home/ServicesSection';
import Results from '../../components/Home/Results';
import Process from '../../components/Home/Process';
import CTA from '../../components/Home/CTA';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <Approach />
      <ServicesSection />
      <Results />
      <Process />
      <CTA
        eyebrow="Próximo passo"
        title="Pronto para ter uma gestão financeira que realmente funciona?"
        subtitle="Agende uma conversa de 30 minutos com um dos nossos especialistas. Sem compromisso, sem pressa - só clareza sobre o que podemos fazer pelo seu negócio."
        actions={[
          {
            label: 'Agendar Reunião',
            to: '/contato',
            className: 'w-100',
          },
          {
            label: 'WhatsApp',
            href: 'https://wa.me/message/5R23HSIBPPADA1',
            variant: 'ghost',
            className: 'w-100',
          },
        ]}
      />
    </div>
  );
}
