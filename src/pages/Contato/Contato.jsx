import { useState } from 'react';
import { company } from '../../utils/site';
import { submitContactForm } from '../../services/api';
import ContactHero from '../../components/Contato/ContatoHero';
import ContactFormSection from '../../components/Contato/ContatoFormSection';
import ContactFaqs from '../../components/Contato/ContatoFaqs';
import styles from './Contato.module.css';

const contactTopics = [
  {
    id: 'contabilidade',
    label: 'Contabilidade',
    hint: 'Rotina fiscal, societária e acompanhamento mensal.',
  },
  {
    id: 'bpo',
    label: 'BPO Financeiro',
    hint: 'Contas a pagar, receber e visão de caixa mais clara.',
  },
  {
    id: 'tributario',
    label: 'Planejamento Tributário',
    hint: 'Estruturação para pagar o imposto certo, no modelo certo.',
  },
  {
    id: 'abertura',
    label: 'Abertura de Empresa',
    hint: 'CNPJ, enquadramento e organização inicial do negócio.',
  },
  {
    id: 'troca-contabilidade',
    label: 'Troca de Contabilidade',
    hint: 'Migração organizada sem perder prazos nem histórico.',
  },
  {
    id: 'regularizacao-fiscal',
    label: 'Regularização Fiscal',
    hint: 'Pendências, ajustes e retomada da conformidade.',
  },
];

const faqs = [
  {
    question: 'Vocês atendem empresas de outros estados?',
    answer:
      'Sim. Nosso atendimento é remoto e organizado para empresas de qualquer região do Brasil.',
  },
  {
    question: 'Qual o melhor canal para uma resposta rápida?',
    answer:
      'O formulário é ideal para registrar contexto. Se preferir urgência, use o WhatsApp direto ao lado.',
  },
  {
    question: 'O que devo informar na mensagem?',
    answer:
      'Explique o porte da empresa, o momento atual e o que você quer resolver. Isso ajuda a direcionar a conversa.',
  },
  {
    question: 'Vocês ajudam na troca de contador?',
    answer:
      'Sim. Podemos orientar a migração e organizar os documentos para a transição acontecer com menos atrito.',
  },
  {
    question: 'Vocês cuidam de pendências fiscais ou atrasos?',
    answer:
      'Cuidamos do diagnóstico e da regularização para entender o cenário e definir o melhor caminho de retomada.',
  },
  {
    question: 'Em quanto tempo vocês retornam o contato?',
    answer:
      'Nosso prazo padrão é de até 24 horas úteis, mas mensagens com mais contexto tendem a ser respondidas com mais objetividade.',
  },
  {
    question: 'Preciso saber exatamente qual serviço contratar?',
    answer:
      'Não. Se você ainda estiver em dúvida, descreva o problema e o momento do negócio. Nós ajudamos a enquadrar a melhor frente.',
  },
  {
    question: 'Vocês atendem empresas que estão começando agora?',
    answer:
      'Sim. Abertura de empresa, estrutura contábil e organização financeira fazem parte do tipo de apoio que oferecemos.',
  },
];

const initialForm = {
  name: '',
  email: '',
  message: '',
};

function buildMessage(topicLabel, message) {
  const parts = [];

  if (topicLabel) {
    parts.push(`Assunto: ${topicLabel}`);
  }

  if (message.trim()) {
    parts.push(message.trim());
  }

  return parts.join('\n\n');
}

export default function Contato() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [loading, setLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(contactTopics[0].id);

  const selectedTopicLabel =
    contactTopics.find((topic) => topic.id === selectedTopic)?.label ?? '';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    const payload = {
      ...form,
      message: buildMessage(selectedTopicLabel, form.message),
    };

    try {
      const response = await submitContactForm(payload);
      setStatus({ type: 'success', message: response.message });
      setForm(initialForm);
      setSelectedTopic(contactTopics[0].id);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Não foi possível enviar a mensagem.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      <ContactHero company={company} />
      <ContactFormSection
        contactTopics={contactTopics}
        form={form}
        loading={loading}
        company={company}
        selectedTopic={selectedTopic}
        selectedTopicLabel={selectedTopicLabel}
        status={status}
        onChange={handleChange}
        onSelectTopic={setSelectedTopic}
        onSubmit={handleSubmit}
      />
      <ContactFaqs faqs={faqs} />
    </div>
  );
}
