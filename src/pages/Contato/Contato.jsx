import { useState } from 'react';
import Button from '../../components/ui/Button/Button';
import SectionHeader from '../../components/ui/SectionHeader/SectionHeader';
import Input from '../../components/ui/Input/Input';
import { company } from '../../utils/site';
import { submitContactForm } from '../../services/api';
import styles from './Contato.module.css';

const initialForm = {
  name: '',
  email: '',
  message: '',
};

export default function Contato() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: 'idle', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      const response = await submitContactForm(form);
      setStatus({ type: 'success', message: response.message });
      setForm(initialForm);
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
      <section className={styles.hero}>
        <div className="container-main">
          <div className={styles.heroGrid}>
            <SectionHeader
              eyebrow="Contato"
              title={
                <>
                  Vamos conversar sobre
                  <br />
                  a estrutura da sua empresa?
                </>
              }
              subtitle="Use o formulário para falar com a nossa equipe. Mantivemos a mesma linguagem visual da Home para que o contato pareça uma extensão natural do site."
            />

            <div className={styles.infoCard}>
              <p className={styles.infoTitle}>Atendimento</p>
              <p className={styles.infoText}>
                Respondemos em até 24 horas úteis e direcionamos a conversa para a frente mais
                adequada ao momento da sua empresa.
              </p>

              <div className={styles.contactList}>
                <a href={`tel:${company.phoneHref}`} className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <i className="bi bi-telephone" />
                  </span>
                  <div>
                    <span className={styles.contactLabel}>Telefone</span>
                    <strong>{company.phone}</strong>
                  </div>
                </a>

                <a href={`mailto:${company.email}`} className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <i className="bi bi-envelope" />
                  </span>
                  <div>
                    <span className={styles.contactLabel}>E-mail</span>
                    <strong>{company.email}</strong>
                  </div>
                </a>

                <div className={styles.contactItem}>
                  <span className={styles.contactIcon} aria-hidden="true">
                    <i className="bi bi-geo-alt" />
                  </span>
                  <div>
                    <span className={styles.contactLabel}>Endereço</span>
                    <strong>{company.address}</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding surface-light">
        <div className="container-main">
          <div className={styles.formGrid}>
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Envie sua mensagem</h2>
              <p className={styles.formText}>
                Conte um pouco sobre sua empresa e sobre o que você precisa. Quanto mais contexto,
                mais objetiva será nossa resposta.
              </p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <Input
                  label="Nome"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                />
                <Input
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="voce@empresa.com"
                  required
                />
                <Input
                  label="Mensagem"
                  id="message"
                  name="message"
                  type="textarea"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Conte o que sua empresa precisa..."
                  rows={6}
                  required
                />

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
                    className={[
                      styles.status,
                      status.type === 'success' ? styles.success : styles.error,
                    ]
                      .filter(Boolean)
                      .join(' ')}
                    role="status"
                  >
                    {status.message}
                  </p>
                ) : null}
              </form>
            </div>

            <aside className={styles.sideCard}>
              <p className={styles.sideLabel}>Próximo passo</p>
              <h3 className={styles.sideTitle}>Conversa prática, sem formalidade excessiva.</h3>
              <p className={styles.sideText}>
                Nosso objetivo é entender sua operação e indicar o caminho mais coerente para
                contabilidade, BPO financeiro e organização tributária.
              </p>
              <Button to="/servicos" variant="ghost">
                Ver serviços
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </Button>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

