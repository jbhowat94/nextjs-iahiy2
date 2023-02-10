import Image from 'next/image';

import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import logoLaravel from '@/images/logos/laravel.svg';
import logoMirage from '@/images/logos/mirage.svg';
import logoStatamic from '@/images/logos/statamic.svg';
import logoStaticKit from '@/images/logos/statickit.svg';
import logoTransistor from '@/images/logos/transistor.svg';
import logoTuple from '@/images/logos/tuple.svg';

export function Hero() {
  return (
    <Container className="pt-20 pb-16 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight sm:text-7xl">
        GradHire{' '}
        <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 418 42"
            className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          ></svg>
          <span className="relative">helping students</span>
        </span>{' '}
        land their dream job
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
        Join the future of graduate hiring today. Sign up for GradHire and start
        your journey to your dream career.
      </p>
      <div className="mt-10 flex justify-center gap-x-6 text-grey ">
        <Button href="/register" className="border border-grey">
          Register your interest early
        </Button>
      </div>
    </Container>
  );
}
