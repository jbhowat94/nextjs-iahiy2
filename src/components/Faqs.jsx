import Image from 'next/image';

import { Container } from '@/components/Container';
import backgroundImage from '@/images/background-faqs.jpg';

const faqs = [
  [
    {
      question: 'What is GradHire?',
      answer:
        'GradHire is a platform that connects recent graduates with businesses seeking to fill entry-level roles. It utilizes AI technology to match students with positions that align with their skills, interests, and career goals.',
    },
    {
      question: 'How does the matching process work?',
      answer:
        'The matching process involves a combination of AI technology and human input. Students create a profile and answer a series of questions about their education, work experience, and career aspirations. The AI then matches students with roles that are the best fit for their profile.',
    },
    {
      question: 'Is there a fee to use GradHire?',
      answer:
        'For students, GradHire is free to use. Businesses may pay a fee for access to the platform and its services.',
    },
  ],
  [
    {
      question: 'How does GradHire ensure the quality of job postings?',
      answer:
        'GradHire works with businesses to verify the authenticity of job postings and ensure that they meet certain quality standards.',
    },
    {
      question: 'Can I apply for multiple roles through GradHire?',
      answer:
        'Yes, students are able to apply for multiple roles through the platform.',
    },
    {
      question:
        'I found other companies called TaxPal, are you sure you can use this name?',
      answer:
        'Honestly not sure at all. We haven’t actually incorporated or anything, we just thought it sounded cool and made this website.',
    },
  ],
  [
    {
      question: 'What if I am not matched with a job that is right for me?',
      answer:
        'GradHire is constantly updating and refining its AI algorithms to improve the accuracy of the match. If you are not matched with a role that is a good fit, you may want to consider updating your profile or providing additional information to the AI. Additionally, new job postings are added to the platform regularly, so be sure to check back for updates.',
    },
  ],
];

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute top-0 left-1/2 max-w-none translate-x-[-30%] -translate-y-1/4"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
