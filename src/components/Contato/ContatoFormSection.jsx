import Button from '../ui/Button/Button';
import Input from '../ui/Input/Input';
import SectionHeader from '../ui/SectionHeader/SectionHeader';
import styles from './ContatoFormSection.module.css';

export default function ContatoFormSection({
  contactTopics,
  form,
  loading,
  company,
  selectedTopic,
  selectedTopicLabel,
  status,
  onChange,
  onSelectTopic,
  onSubmit,
}) {
  return (
    <section className={`section-padding surface-light ${styles.formSection}`}>
      <div className="container-main">
        <div className='mb-5'>
          <SectionHeader
            eyebrow="Mensagem guiada"
            title="Conte o cenário da sua empresa"
            subtitle="Primeiro você escolhe o foco. Depois, descreve o contexto. O resultado é uma conversa mais rápida e objetiva."
          />
        </div>
        <div className={styles.card}>
          

          <div className={styles.topicGrid} role="tablist" aria-label="Escolha o assunto">
            {contactTopics.map((topic) => {
              const isActive = topic.id === selectedTopic;

              return (
                <button
                  key={topic.id}
                  type="button"
                  className={[styles.topicChip, isActive ? styles.topicChipActive : '']
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => onSelectTopic(topic.id)}
                  aria-pressed={isActive}
                >
                  <span>{topic.label}</span>
                  <small>{topic.hint}</small>
                </button>
              );
            })}
          </div>

          <form className={styles.form} onSubmit={onSubmit}>
            <Input
              label="Nome"
              id="name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Seu nome"
              required
            />
            <Input
              label="E-mail"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="voce@empresa.com"
              required
            />
            <Input
              label="Mensagem"
              id="message"
              name="message"
              type="textarea"
              value={form.message}
              onChange={onChange}
              placeholder="Conte o que sua empresa precisa..."
              rows={7}
              required
            />

            <div className={styles.formMeta}>
              <span>
                Tema atual: <strong>{selectedTopicLabel}</strong>
              </span>
              <span>Tempo estimado de resposta: até 24 horas úteis</span>
            </div>

            <div className={styles.formActions}>
              <Button type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar mensagem'}
                <i className="bi bi-send" aria-hidden="true" />
              </Button>
              <Button href={company.whatsapp} variant="secondary">
                WhatsApp direto
              </Button>
            </div>

            {status.message ? (
              <p
                className={[styles.status, status.type === 'success' ? styles.success : styles.error]
                  .filter(Boolean)
                  .join(' ')}
                role="status"
              >
                {status.message}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
