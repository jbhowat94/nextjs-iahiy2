import Image from 'next/image';

import { Container } from '@/components/Container';
import avatarImage1 from '@/images/avatars/avatar-1.png';
import avatarImage2 from '@/images/avatars/avatar-2.png';
import avatarImage3 from '@/images/avatars/avatar-3.png';
import avatarImage4 from '@/images/avatars/avatar-4.png';
import avatarImage5 from '@/images/avatars/avatar-5.png';

const testimonials = [
  [
    {
      content:
        'GradHire helped me land my dream job in just a few weeks! The platform was user-friendly and the matching process was spot on. I highly recommend GradHire to all recent graduates.',
      author: {
        name: 'Sarah',
        role: 'recent graduate',
        image: avatarImage1,
      },
    },
    {
      content:
        'As a small business owner, I was struggling to find the right talent for my company. But then I discovered GradHire and it completely changed the game for me. The candidates I found through this platform were a great fit for my company and I ended up hiring 2 of them. I highly recommend GradHire to all employers looking for top-notch talent.',
      author: {
        name: 'John',
        role: 'Small business owner',
        image: avatarImage4,
      },
    },
  ],
  [
    {
      content:
        "I was so impressed by the personalized approach of GradHire. They really took the time to understand my skills and what I was looking for in a job. Within a month, I was offered a job that was the perfect fit for me. I'm so grateful for GradHire and would recommend them to anyone looking for their dream job.",
      author: {
        name: 'Emily',
        role: 'recent graduate',
        image: avatarImage5,
      },
    },
  ],
  [],
];

function QuoteIcon(props) {}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="bg-slate-50 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            GradHire connects businesses with top talent from universities,
            providing access to a pool of highly motivated and skilled graduates
            ready to start their careers.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            GradHire can benefit businesses by providing them access to a pool
            of highly qualified and motivated recent graduates. Businesses can
            save time and resources on traditional recruitment methods by using
            GradHire to find the right fit for their organization. GradHire's
            innovative matching algorithm ensures that businesses are only
            presented with candidates who meet their specific requirements and
            job requirements, making the hiring process faster, easier, and more
            efficient. By partnering with GradHire, businesses can tap into the
            latest talent, drive innovation, and build a diverse workforce to
            support their long-term success.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <QuoteIcon className="absolute top-6 left-6 fill-slate-100" />
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.content}
                        </p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">
                            {testimonial.author.name}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.author.role}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full bg-slate-50">
                          <Image
                            className="h-14 w-14 object-cover"
                            src={testimonial.author.image}
                            alt=""
                            width={56}
                            height={56}
                          />
                        </div>
                      </figcaption>
                    </figure>
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
