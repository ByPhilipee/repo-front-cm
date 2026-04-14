import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader/SectionHeader';
import ServicoCard from './ServicoCard';
import ServicoModal from './ServicoModal';
import styles from './OQueEntregamos.module.css';

const services = [
  {
    icon: 'bi-journal-check',
    title: 'Contabilidade empresarial',
    summary: 'Organização contábil e fiscal para dar segurança, rastreabilidade e previsibilidade à operação.',
    fullDescription:
      'Assumimos a estrutura contábil da empresa para organizar o dia a dia, reduzir ruído operacional e apoiar decisões com informação confiável.',
    includes: [
      'Escrituração contábil e fiscal',
      'Rotinas societárias e suporte documental',
      'Balancetes, balanço e DRE',
      'Acompanhamento de obrigações acessórias',
    ],
    outcomes: [
      'Mais clareza sobre a saúde financeira do negócio',
      'Menos retrabalho entre equipe interna e escritório',
      'Base confiável para decisões de crescimento',
    ],
    note: 'Ideal para empresas que precisam de uma rotina contábil mais organizada e próxima da operação.',
  },
  {
    icon: 'bi-cash-coin',
    title: 'BPO financeiro',
    summary: 'Gestão das rotinas financeiras com contas a pagar, receber, conciliação e caixa.',
    fullDescription:
      'Estruturamos e operamos o financeiro para trazer disciplina, previsibilidade e visão gerencial para a empresa.',
    includes: [
      'Contas a pagar e receber',
      'Conciliação bancária',
      'Controle de fluxo de caixa',
      'Relatórios gerenciais periódicos',
    ],
    outcomes: [
      'Rotina financeira mais confiável',
      'Menos falhas no controle de pagamentos e recebimentos',
      'Mais visibilidade para projeções e decisões',
    ],
    note: 'Indicado para empresas que querem profissionalizar o financeiro sem perder agilidade.',
  },
  {
    icon: 'bi-diagram-3',
    title: 'Planejamento tributário',
    summary: 'Análise de enquadramento e oportunidades legais para reduzir carga tributária com segurança.',
    fullDescription:
      'Revisamos estrutura tributária, cenário de operação e projeções para identificar o regime mais adequado e as melhores oportunidades de eficiência fiscal.',
    includes: [
      'Leitura de regime tributário atual',
      'Simulações de enquadramento',
      'Análise de impacto fiscal',
      'Recomendações de revisão tributária',
    ],
    outcomes: [
      'Menor exposição a riscos tributários',
      'Melhor aderência entre regime e operação',
      'Base técnica para decisões estratégicas',
    ],
    note: 'Funciona bem para empresas em crescimento ou em momento de revisão de estrutura.',
  },
  {
    icon: 'bi-building',
    title: 'Abertura de empresas',
    summary: 'Apoio completo na abertura, regularização e escolha da estrutura adequada para o negócio.',
    fullDescription:
      'Acompanhamos desde a abertura até os ajustes iniciais para garantir que o negócio comece com estrutura correta e sem improviso.',
    includes: [
      'Definição de atividade e enquadramento',
      'Apoio na constituição e registros',
      'Emissão de CNPJ e regularizações',
      'Orientação sobre regime ideal',
    ],
    outcomes: [
      'Início de operação com mais segurança',
      'Redução de retrabalho burocrático',
      'Estrutura adequada ao estágio do negócio',
    ],
    note: 'Recomendado para quem está formalizando a empresa ou reorganizando sua base societária.',
  },
  {
    icon: 'bi-file-earmark-text',
    title: 'Rotinas fiscais',
    summary: 'Controle de documentos, conferências e obrigações fiscais com mais previsibilidade.',
    fullDescription:
      'Organizamos a rotina fiscal para reduzir falhas operacionais, melhorar a conferência de informações e manter a empresa em conformidade.',
    includes: [
      'Conferência e organização fiscal',
      'Rotinas de emissão e validação',
      'Apoio no fechamento mensal',
      'Suporte em obrigações acessórias',
    ],
    outcomes: [
      'Mais controle sobre documentos e prazos',
      'Menor risco de inconsistências fiscais',
      'Rotina mais leve para a equipe interna',
    ],
    note: 'Bom para empresas com fluxo documental intenso e necessidade de padronização.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Regularização societária',
    summary: 'Ajustes de estrutura, documentos e registros para manter a empresa organizada.',
    fullDescription:
      'Damos suporte em ajustes societários e atualizações estruturais para que a empresa opere com base documental correta e atualizada.',
    includes: [
      'Atualização de cadastros e registros',
      'Ajustes contratuais e societários',
      'Revisão documental de apoio',
      'Suporte em demandas de regularização',
    ],
    outcomes: [
      'Estrutura formal mais consistente',
      'Menos pendências administrativas',
      'Maior segurança documental',
    ],
    note: 'Indicado quando a empresa precisa organizar ou corrigir sua base societária.',
  },
];

export default function OQueEntregamos() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section className={styles.section}>
      <div className="container-main">
        <SectionHeader
          align="center"
          eyebrow="O que entregamos"
          title="Serviços estruturados para dar mais controle, previsibilidade e segurança ao negócio."
          subtitle="Frentes contábil, financeira e tributária pensadas para apoiar a operação com organização e clareza."
        />

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 mt-1" role="list" aria-label="Serviços oferecidos">
          {services.map((service) => (
            <div className="col" key={service.title} role="listitem">
              <ServicoCard service={service} onClick={() => setActiveService(service)} />
            </div>
          ))}
        </div>

        {activeService ? (
          <ServicoModal service={activeService} onClose={() => setActiveService(null)} />
        ) : null}
      </div>
    </section>
  );
}
