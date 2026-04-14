import CTA from '../Home/CTA';

export default function ProximoPasso() {
  return (
    <CTA
      eyebrow="Próximo passo"
      eyebrowMark={null}
      title="Quer montar a estrutura ideal para sua empresa?"
      subtitle="Fale com a nossa equipe e receba uma orientação inicial sobre o que faz sentido para o seu estágio atual."
      actions={[
        {
          label: 'Falar com especialista',
          to: '/contato',
          icon: 'bi bi-calendar-check',
        },
      ]}
    />
  );
}
