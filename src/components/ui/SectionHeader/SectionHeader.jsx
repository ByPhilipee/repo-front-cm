import styles from './SectionHeader.module.css';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  variant = 'default',
  titleClassName = '',
  subtitleClassName = '',
  className = '',
}) {
  const containerClassName = [
    styles.header,
    align === 'center' ? styles.center : '',
    variant !== 'default' ? styles[variant] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={`section-title ${titleClassName}`}>{title}</h2>
      {subtitle ? <p className={`section-subtitle ${subtitleClassName}`}>{subtitle}</p> : null}
    </div>
  );
}
