import Button from '../ui/Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-headline">


      <div className="container-main position-relative z-1">
        <div className="row min-vh-100 align-items-center justify-content-center py-5">
          <div className="col-lg-10 col-xl-8 text-center">
            <p className={`${styles.heroEyebrow} d-inline-flex align-items-center mb-4`}>
              <span className={`${styles.heroEyebrowLine} me-3`} aria-hidden="true" />
              Contabilidade & BPO Financeiro
            </p>

            <h1 id="hero-headline" className={styles.heroHeadline}>
              Gestão que libera
              <br />
              <em>o potencial</em>
              <br />
              da sua empresa.
            </h1>

            <p className={`${styles.heroSubheadline} mb-5 opacity-75 mx-auto`}>
              Assumimos a complexidade financeira e contábil do seu negócio para que você foque
              no que realmente importa: crescer com consistência e decisões mais seguras.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <Button to="/contato">
                Solicitar diagnóstico gratuito
              </Button>
              <Button to="/servicos" variant="ghost">
                Ver todos os serviços
              </Button>
            </div>

            <div className={`${styles.heroStats} d-flex flex-wrap justify-content-center gap-md-5 gap-4 pt-4`} role="list" aria-label="Números que nos definem">
              <div role="listitem">
                <p className={`${styles.heroStatValue} mb-1`}>+120</p>
                <p className={`${styles.heroStatLabel} mb-0 opacity-50`}>Empresas atendidas</p>
              </div>
              <div className="border-start border-white border-opacity-10 ps-md-5 ps-4" role="listitem">
                <p className={`${styles.heroStatValue} mb-1`}>98%</p>
                <p className={`${styles.heroStatLabel} mb-0 opacity-50`}>Taxa de retenção</p>
              </div>
              <div className="border-start border-white border-opacity-10 ps-md-5 ps-4" role="listitem">
                <p className={`${styles.heroStatValue} mb-1`}>10+</p>
                <p className={`${styles.heroStatLabel} mb-0 opacity-50`}>Anos de expertise</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}