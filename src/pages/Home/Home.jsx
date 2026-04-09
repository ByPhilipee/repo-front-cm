import Hero from '../../components/Home/Hero';
import TrustStrip from '../../components/Home/TrustStrip';
import Approach from '../../components/Home/Approach';
import ServicesSection from '../../components/Home/ServicesSection';
import Results from '../../components/Home/Results';
import Process from '../../components/Home/Process';
import CTA from '../../components/Home/CTA';
import styles from './Home.module.css';

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />
      <TrustStrip />
      <Approach />
      <ServicesSection />
      <Results />
      <Process />
      <CTA />
    </div>
  );
}
