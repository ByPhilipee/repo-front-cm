import Button from '../ui/Button/Button';
import SectionHeader from '../ui/SectionHeader/SectionHeader';
import styles from './ContatoHero.module.css';

export default function ContatoHero({ company }) {
  return (
    <section className={styles.hero}>
      <div className="container-main">
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <SectionHeader
              eyebrow="Contato"
              title={
                <>
                  Vamos organizar sua operação
                  <span>com uma conversa clara, direta e útil.</span>
                </>
              }
              subtitle="A página foi repensada para facilitar o primeiro contato: você encontra o canal certo e já pode enviar um pedido mais bem direcionado."
              titleClassName={styles.heroTitle}
              subtitleClassName={styles.heroSubtitle}
            />

            <div className={styles.quickActions}>
              <Button href={company.whatsapp} variant="primary">
                Falar no WhatsApp
                <i className="bi bi-whatsapp" aria-hidden="true" />
              </Button>
              <Button href={`mailto:${company.email}`} variant="secondary">
                Enviar e-mail
              </Button>
            </div>
          </div>

          <aside className={styles.heroCard}>
            <p className={styles.heroCardLabel}>Atendimento</p>
            <h2 className={styles.heroCardTitle}>Canal certo para cada tipo de pedido.</h2>
            <p className={styles.heroCardText}>
              Use o formulário quando quiser detalhar o cenário. Se a demanda for rápida, os
              atalhos abaixo resolvem em poucos cliques.
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
                  <span className={styles.contactLabel}>Base</span>
                  <strong>{company.city}</strong>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
