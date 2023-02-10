import Image from 'next/image';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            Unlock endless opportunities and take the first step towards your
            dream career by registering your interest with GradHire, where we
            match you with top employers based on your skills and experiences
            for seamless job placement.
          </p>
          <Button
            href="/register"
            className="mt-10 border-grey bg bg-green-neon text color-white"
          >
            Sign up for free forever
          </Button>
        </div>
      </Container>
    </section>
  );
}
