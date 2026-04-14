import ComoAtuamos from '../../components/Servicos/ComoAtuamos';
import OQueEntregamos from '../../components/Servicos/OQueEntregamos';
import ProximoPasso from '../../components/Servicos/ProximoPasso';
import ServicosSection from '../../components/Servicos/ServicosSection';
import styles from './Servicos.module.css';

export default function Servicos() {
  return (
    <div className={styles.page}>
      <ServicosSection />
      <OQueEntregamos />
      <ComoAtuamos />
      <ProximoPasso />
    </div>
  );
}
