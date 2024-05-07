// Page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Nav />
      <Hero />
    </main>
  );
}
