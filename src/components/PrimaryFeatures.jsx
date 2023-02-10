import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-features.jpg';

const features = [
  {
    title: 'Sign up',
    description:
      "Students create a profile on GradHire, detailing their education, skills, and experience. They also specify the types of roles they're interested in.",
  },
  {
    title: 'Matching',
    description:
      'GradHire uses an AI-powered algorithm to match students with businesses that are looking for individuals with their skillset and experience.',
  },
  {
    title: 'Interviews',
    description:
      'Businesses can schedule interviews with students through the platform, making the process convenient and efficient.',
  },
  {
    title: 'Hiring',
    description:
      'Once a student and business have found a match, they can move forward with the hiring process, confident that they have found the right fit.',
  },
];

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState('horizontal');

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-green-mid pt-20 pb-28 sm:py-32"
    >
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            GradHire connects students to businesses
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            GradHire works by connecting recent graduates with businesses that
            are looking to fill entry-level roles. The platform streamlines the
            recruitment process for both parties, saving time and effort in
            finding the perfect match.
          </p>
        </div>
      </Container>
    </section>
  );
}
