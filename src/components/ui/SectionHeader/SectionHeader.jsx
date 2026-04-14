import styles from './SectionHeader.module.css';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  variant = 'default',
  eyebrowStyle = 'default',
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

  const eyebrowClassName = [
    'eyebrow',
    eyebrowStyle !== 'default' ? styles[eyebrowStyle] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
      {eyebrow ? <p className={eyebrowClassName}>{eyebrow}</p> : null}
      <h2 className={`section-title ${titleClassName}`}>{title}</h2>
      {subtitle ? <p className={`section-subtitle ${subtitleClassName}`}>{subtitle}</p> : null}
    </div>
  );
}
