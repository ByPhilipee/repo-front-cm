import { useState } from 'react';
import styles from './ContatoFaqs.module.css';

export default function ContatoFaqs({ faqs }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className={`section-padding surface-light ${styles.section}`}>
      <div className="container-main">
        <div className={styles.card}>
          <div className={styles.header}>
            <p className="eyebrow">Perguntas rápidas</p>
            <h2 className={styles.title}>Tudo que você precisa saber antes de enviar</h2>
            <p className={styles.subtitle}>
              Reunimos algumas respostas curtas para deixar o primeiro contato mais objetivo e
              reduzir idas e vindas.
            </p>
          </div>

          <div className={styles.list}>
            {faqs.map((faq) => {
              const isOpen = openFaq === faq.question;

              return (
                <button
                  key={faq.question}
                  type="button"
                  className={[styles.item, isOpen ? styles.itemOpen : ''].filter(Boolean).join(' ')}
                  onClick={() => setOpenFaq(isOpen ? null : faq.question)}
                  aria-expanded={isOpen}
                >
                  <span className={styles.question}>{faq.question}</span>
                  <span className={styles.toggle} aria-hidden="true">
                    <i className={`bi ${isOpen ? 'bi-dash-lg' : 'bi-plus-lg'}`} />
                  </span>
                  {isOpen ? <span className={styles.answer}>{faq.answer}</span> : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
