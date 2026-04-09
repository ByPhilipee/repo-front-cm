import styles from './Input.module.css';

export default function Input({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  rows = 4,
  required = false,
  error,
}) {
  const field = type === 'textarea' ? (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      required={required}
      className={styles.control}
    />
  ) : (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={styles.control}
    />
  );

  return (
    <label className={styles.field} htmlFor={id}>
      <span className={styles.label}>{label}</span>
      {field}
      {error ? <span className={styles.error}>{error}</span> : null}
    </label>
  );
}

