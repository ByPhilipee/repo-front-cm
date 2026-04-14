import ComoAtuamos from '../../components/Servicos/ComoAtuamos';
import OQueEntregamos from '../../components/Servicos/OQueEntregamos';
import CTA from '../../components/Home/CTA';
import ServicosSection from '../../components/Servicos/ServicosSection';
import styles from './Servicos.module.css';

export default function Servicos() {
  return (
    <div className={styles.page}>
      <ServicosSection />
      <OQueEntregamos />
      <CTA
        eyebrow="Próximo passo"
        eyebrowMark={null}
        title="Quer montar a estrutura ideal para sua empresa?"
        subtitle="Fale com a nossa equipe e receba uma orientação inicial sobre o que faz sentido para o seu estágio atual."
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
