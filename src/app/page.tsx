// Page.tsx
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Carros from '@/components/Carros';
import Sobre from '@/components/Sobre';
import Contato from '@/components/Contato';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Nav />
      <Hero />
      <Carros />
      <Sobre />
      <Contato />
    </main>
  );
}
