import { useState } from 'react';
import styles from './ContatoFaqs.module.css';
import SectionHeader from '../ui/SectionHeader/SectionHeader';

export default function ContatoFaqs({ faqs }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className={`section-padding surface-light ${styles.section}`}>
      <div className="container-main">
        <div className='mb-5'>
                  <SectionHeader
                  align="center"
                  eyebrowStyle="framed"
                    eyebrow="Perguntas rápidas"
                    title="Tudo que você precisa saber antes de enviar"
                    subtitle="Reunimos algumas respostas curtas para deixar o primeiro contato mais objetivo e
              reduzir idas e vindas."
                  />
         </div>
        <div className={styles.card}>

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
