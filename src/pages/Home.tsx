import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Programs } from '../components/Programs';
import { Impact } from '../components/Impact';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';
import { FreeBanner } from '../components/FreeBanner';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <FreeBanner />
      <Programs />
      <Impact />
      <FAQ />
      <CTA />
    </>
  );
}
