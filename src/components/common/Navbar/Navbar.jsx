import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import useToggle from '../../../hooks/useToggle';
import Button from '../../ui/Button/Button';
import { company, navItems } from '../../../utils/site';
import logoUrl from '../../../assets/logo8.svg';
import styles from './Navbar.module.css';

export default function Navbar() {
  const { value: isOpen, toggle, close } = useToggle(false);
  const location = useLocation();

  useEffect(() => {
    close();
  }, [location.pathname, close]);

  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('[data-navbar="cm"]');
      if (nav) {
        nav.classList.toggle(styles.scrolled, window.scrollY > 20);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <nav
        data-navbar="cm"
        className={[styles.navbar, isOpen ? styles.menuOpen : ''].filter(Boolean).join(' ')}
        aria-label="Navegação principal"
      >
        <div className="container-main">
          <div className={styles.inner}>
            <NavLink to="/" className={styles.brand} aria-label={`${company.name} - página inicial`}>
              <img src={logoUrl} alt={company.name} className={styles.logo} />
            </NavLink>

            <ul className={styles.nav} role="list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    className={({ isActive }) =>
                      [styles.link, isActive ? styles.active : ''].filter(Boolean).join(' ')
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className={styles.actions}>
              <Button href={company.portal} variant="primary" className={styles.portal}>
                Portal do Cliente
              </Button>
            </div>

            <button
              type="button"
              className={styles.toggle}
              onClick={toggle}
              aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-nav"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>

        <div id="mobile-nav" className={[styles.mobile, isOpen ? styles.mobileOpen : ''].filter(Boolean).join(' ')}>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                [styles.mobileLink, isActive ? styles.mobileLinkActive : ''].filter(Boolean).join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className={styles.mobileActions}>
            <Button to="/contato" variant="secondary" className={styles.mobileButton}>
              Falar com especialista
            </Button>
            <Button href={company.portal} variant="nav" className={styles.mobileButton}>
              Portal do Cliente
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
