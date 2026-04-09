import { Link } from 'react-router-dom';
import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  className = '',
  type = 'button',
  ...props
}) {
  const buttonClassName = [styles.button, styles[variant], className].filter(Boolean).join(' ');

  if (to) {
    return (
      <Link className={buttonClassName} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    const externalProps = href.startsWith('http')
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};

    return (
      <a className={buttonClassName} href={href} {...externalProps} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} type={type} {...props}>
      {children}
    </button>
  );
}

