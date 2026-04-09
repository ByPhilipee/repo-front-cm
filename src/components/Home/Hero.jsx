import Button from '../ui/Button/Button';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-headline">
      <div className={styles.heroBgGrid} aria-hidden="true" />
      <div className={styles.heroBgGlow} aria-hidden="true" />
      <div className={styles.heroRule} aria-hidden="true" />

      <div className="container-main">
        <div className={styles.heroInner}>
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>
              <span className={styles.heroEyebrowLine} aria-hidden="true" />
              Contabilidade & BPO Financeiro
            </p>

            <h1 id="hero-headline" className={styles.heroHeadline}>
              Gestão que libera
              <br />
              <em>o potencial</em>
              <br />
              da sua empresa.
            </h1>

            <p className={styles.heroSubheadline}>
              Assumimos a complexidade financeira e contábil do seu negócio para que você foque
              no que realmente importa: crescer com consistência e decisões mais seguras.
            </p>

            <div className={styles.heroActions}>
              <Button to="/contato">
                Solicitar diagnóstico gratuito
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </Button>
              <Button to="/servicos" variant="ghost">
                Ver todos os serviços
              </Button>
            </div>

            <div className={styles.heroStats} role="list" aria-label="Números que nos definem">
              <div role="listitem">
                <p className={styles.heroStatValue}>+120</p>
                <p className={styles.heroStatLabel}>Empresas atendidas</p>
              </div>
              <div role="listitem">
                <p className={styles.heroStatValue}>98%</p>
                <p className={styles.heroStatLabel}>Taxa de retenção</p>
              </div>
              <div role="listitem">
                <p className={styles.heroStatValue}>10+</p>
                <p className={styles.heroStatLabel}>Anos de expertise</p>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.heroCard}>
              <div className={styles.heroCardFloat}>
                <div className={styles.heroCardFloatIcon}>
                  <i className="bi bi-shield-check" />
                </div>
                <div className={styles.heroCardFloatText}>
                  Compliance
                  <br />
                  garantido
                </div>
              </div>

              <div className={styles.heroCardHeader}>
                <span className={styles.heroCardTitle}>Visão Financeira</span>
                <span className={styles.heroCardBadge}>● Ao vivo</span>
              </div>

              <div className={styles.heroCardMetric}>
                <div className={styles.heroCardMetricValue}>R$ 842.300</div>
                <div className={styles.heroCardMetricChange}>
                  <i className="bi bi-graph-up-arrow" />
                  +18,4% em relação ao mês anterior
                </div>
              </div>

              <div className={styles.heroCardChart} aria-label="Gráfico de receita mensal">
                <div className={styles.heroCardBar} style={{ '--bar-h': '52%' }} />
                <div className={styles.heroCardBar} style={{ '--bar-h': '68%' }} />
                <div className={styles.heroCardBar} style={{ '--bar-h': '44%' }} />
                <div className={styles.heroCardBar} style={{ '--bar-h': '80%' }} />
                <div className={styles.heroCardBar} style={{ '--bar-h': '61%' }} />
                <div className={styles.heroCardBar} style={{ '--bar-h': '90%' }} />
                <div className={styles.heroCardBar} style={{ '--bar-h': '75%' }} />
              </div>

              <div className={styles.heroCardKpis}>
                <div className={styles.heroCardKpi}>
                  <div className={styles.heroCardKpiLabel}>Margem Líquida</div>
                  <div className={styles.heroCardKpiValue}>24,1%</div>
                </div>
                <div className={styles.heroCardKpi}>
                  <div className={styles.heroCardKpiLabel}>A Receber</div>
                  <div className={styles.heroCardKpiValue}>R$ 93k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}