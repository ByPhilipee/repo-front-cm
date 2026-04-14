import Button from '../ui/Button/Button';
import styles from './CTA.module.css';

export default function CTA({
  eyebrow,
  title,
  subtitle,
  actions = [],
  eyebrowMark = '—',
  className = '',
  sectionClassName = '',
  innerClassName = '',
  textClassName = '',
  eyebrowClassName = '',
  titleClassName = '',
  subtitleClassName = '',
  actionsClassName = '',
  titleId = 'cta-title',
}) {
  const sectionClasses = [styles.ctaSection, sectionClassName, className].filter(Boolean).join(' ');
  const innerClasses = [styles.ctaInner, innerClassName].filter(Boolean).join(' ');
  const textClasses = [styles.ctaText, textClassName].filter(Boolean).join(' ');
  const eyebrowClasses = [styles.ctaEyebrow, eyebrowClassName].filter(Boolean).join(' ');
  const titleClasses = [styles.ctaTitle, titleClassName].filter(Boolean).join(' ');
  const subtitleClasses = [styles.ctaSub, subtitleClassName].filter(Boolean).join(' ');
  const actionsClasses = [styles.ctaActions, actionsClassName].filter(Boolean).join(' ');

  return (
    <section className={sectionClasses} aria-labelledby={titleId}>
      <div className="container-main">
        <div className={innerClasses}>
          <div className={textClasses}>
            {eyebrow ? (
              <p className={eyebrowClasses}>
                {eyebrowMark ? <span aria-hidden="true">{eyebrowMark}</span> : null}
                {eyebrow}
              </p>
            ) : null}
            <h2 id={titleId} className={titleClasses}>
              {title}
            </h2>
            {subtitle ? <p className={subtitleClasses}>{subtitle}</p> : null}
          </div>

          <div className={actionsClasses}>
            {actions.map(({ label, icon, iconPosition = 'end', children, ...buttonProps }) => (
              <Button key={label} {...buttonProps}>
                {icon && iconPosition === 'start' ? <i className={icon} aria-hidden="true" /> : null}
                {children ?? label}
                {icon && iconPosition === 'end' ? <i className={icon} aria-hidden="true" /> : null}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
