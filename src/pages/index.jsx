import Head from 'next/head';

import { CallToAction } from '@/components/CallToAction';
import { Faqs } from '@/components/Faqs';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { SecondaryFeatures } from '@/components/SecondaryFeatures';
import { Testimonials } from '@/components/Testimonials';

export default function Home() {
  return (
    <>
      <Head>
        <title>GradHire</title>
        <meta
          name="description"
          content="GradHire connects university students with personalized career guidance and opportunities to reach their dream job."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />

        <Faqs />
      </main>
      <Footer />
    </>
  );
}
