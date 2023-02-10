import { useId } from 'react';
import { Tab } from '@headlessui/react';
import clsx from 'clsx';
import { Container } from '@/components/Container';

const features = [
  {
    name: 'Sign up',
    summary:
      "Students create a profile on GradHire, detailing their education, skills, and experience. They also specify the types of roles they're interested in.",
    description:
      "Sign up with GradHire to find your dream graduate role! Simply enter your details, upload your resume, and start browsing job opportunities. With our AI-powered matching system, we'll help you find the right job for your skills and experience. Join now and take the first step towards your career!",
  },
  {
    name: 'Matching',
    summary:
      'GradHire uses an AI-powered algorithm to match students with businesses that are looking for individuals with their skillset and experience.',
    description:
      'GradHire matches students with suitable graduate roles by utilizing AI technology to analyze their skills, qualifications and preferences, and connecting them with businesses looking for talented graduates.',
  },
  {
    name: 'Interviews',
    summary:
      'Businesses can schedule interviews with students through the platform, making the process convenient and efficient.',
    description:
      "The Interviews feature on GradHire allows students to showcase their skills and connect with potential employers through virtual or in-person interactions. It provides a platform for both parties to ask and answer questions, evaluate each other's fit and make informed hiring decisions. The feature helps streamline the recruitment process and ensures a smooth and efficient experience for both students and businesses.",
  },

  {
    name: 'Hiring',
    summary:
      'Once a student and business have found a match, they can move forward with the hiring process, confident that they have found the right fit.',
    description:
      'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
  },
];

function Feature({ feature, isActive, className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        !isActive && 'opacity-75 hover:opacity-100 flex flex-col'
      )}
      {...props}
    >
      <h3
        className={clsx(
          'mt-6 text-sm font-medium flex flex-col',
          isActive ? 'text-blue-600' : 'text-slate-600'
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600">{feature.description}</p>
    </div>
  );
}

function FeaturesMobile() {
  return (
    <div className="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
      {features.map((feature) => (
        <div key={feature.name}>
          <Feature feature={feature} className="mx-auto max-w-2xl" isActive />
          <div className="relative mt-10 pb-10">
            <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturesDesktop() {
  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {features.map((feature, featureIndex) => (
              <Feature
                key={feature.name}
                feature={{
                  ...feature,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {feature.name}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />
            ))}
          </Tab.List>
          <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 py-16 xl:px-16">
            <div className="-mx-5 flex">
              {features.map((feature, featureIndex) => (
                <Tab.Panel
                  static
                  key={feature.name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    featureIndex !== selectedIndex && 'opacity-60'
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10"></div>
                </Tab.Panel>
              ))}
            </div>
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  );
}

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Our Mission
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Our mission is to empower university students to achieve their
            career aspirations by providing them with access to personalized
            career guidance, industry-relevant tutoring, and job opportunities
            with top employers. We strive to bridge the gap between education
            and employment, and to create a world where every university
            graduate has the tools and resources they need to succeed in their
            dream job.
          </p>
        </div>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  );
}
