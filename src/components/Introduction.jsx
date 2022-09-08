import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'

export function Introduction() {
  return (
    <section
      id="introduction"
      aria-label="Introduction"
      className="pt-20 pb-16 sm:pb-20 md:pt-36 lg:py-32"
    >
      <Container className="text-lg tracking-tight text-slate-700">
        <p className="font-display text-4xl font-bold tracking-tight text-slate-900">
          “How To Add Extra Hours To Your Day, Without Extra Stress Getting In Your Way
.
        </p>
        <p className="mt-4">
        In simple terms, photons are rays of light from the sun, your phone, the TV, and nature. 

So what do photons and struggling agency owners have in common? 

They’re something we see every day but never notice. 

Struggling owners suffer in silence. 

        </p>
        <p className="mt-4">
        It’s as if there’s an unspoken rule the day you start your business that says, ‘if you’re failing, fail quietly.’, ‘if you’re miserable, tell no one.’
        </p>
        <p className="mt-4">
        We’re here to break that rule. 

Worries are usual, but drowning in them is not. 

Before we share with you a challenge that could resurrect your business and fix your mindset, let’s look at these statements. 

        </p>
        <ul role="list" className="mt-8 space-y-3">
          {[
            'Sixty videos for 60 days, which can be listened to as an audiobook, covering many topics that agency owners face, backed up by scientific solutions and real-life advice',
            'A place in the Worrying Warriors group to share your journey with other struggling agency owners.',
            'A PDF copy of the book.',
            'Access to an exclusive podcast with a surprise agency owner each week            ',
           
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          By the end of the book, you’ll have all the confidence you need to dig
          in and start creating beautiful icons that can hold their own against
          any of the sets you can find online.
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
            Get two free chapters straight to your inbox{' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
  )
}
