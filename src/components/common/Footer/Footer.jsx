import { Link } from 'react-router-dom';
import { company, navItems, socialLinks } from '../../../utils/site';
import logoUrl from '../../../assets/logo8.svg';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} aria-labelledby="footer-label">
      <span id="footer-label" className="visually-hidden">
        Rodapé do site
      </span>

      <div className="container-main">
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src={logoUrl} alt={company.name} className={styles.logo} />
            <p className={styles.tagline}>{company.tagline} Atendemos empresas em todo o Brasil.</p>
            <p className={styles.cnpj}>CNPJ: 57.262.882/0001-80</p>
            <div className={styles.socials} aria-label="Redes sociais">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className={styles.socialButton}
                  aria-label={social.label}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <i className={`bi ${social.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className={styles.title}>Navegação</h2>
            <ul className={styles.links} role="list">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={company.portal} className={styles.link} target="_blank" rel="noopener noreferrer">
                  Portal do Cliente
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={styles.title}>Serviços</h2>
            <ul className={styles.links} role="list">
              <li><Link to="/servicos" className={styles.link}>Contabilidade</Link></li>
              <li><Link to="/servicos" className={styles.link}>BPO Financeiro</Link></li>
              <li><Link to="/servicos" className={styles.link}>Planejamento Tributário</Link></li>
              <li><Link to="/servicos" className={styles.link}>Abertura de Empresas</Link></li>
              <li><Link to="/servicos" className={styles.link}>Consultoria Financeira</Link></li>
            </ul>
          </div>

          <div>
            <h2 className={styles.title}>Contato</h2>
            <address className={styles.address}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <i className="bi bi-telephone" />
                </span>
                <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <i className="bi bi-envelope" />
                </span>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <i className="bi bi-geo-alt" />
                </span>
                <span>{company.address}</span>
              </div>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2024 C&M Contabilidade e BPO Financeiro. Todos os direitos reservados.</p>
          <div className={styles.legal}>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
