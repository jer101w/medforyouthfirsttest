import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Programs } from '../components/Programs';
import { Impact } from '../components/Impact';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programs />
      <Impact />
      <FAQ />
      <CTA />
    </>
  );
}
