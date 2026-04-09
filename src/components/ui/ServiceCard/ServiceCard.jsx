import styles from './ServiceCard.module.css';

export default function ServiceCard({
  number,
  icon,
  title,
  text,
  tags = [],
  className = '',
  ...props
}) {
  return (
    <article className={[styles.card, className].filter(Boolean).join(' ')} {...props}>
      <div className={styles.number}>{number}</div>
      <div className={styles.icon} aria-hidden="true">
        <i className={`bi ${icon}`} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
      {tags.length ? (
        <div className={styles.tags} role="list" aria-label={`Tags para ${title}`}>
          {tags.map((tag) => (
            <span key={tag} className={styles.tag} role="listitem">
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
