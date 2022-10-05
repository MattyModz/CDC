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
            'I’m worried about how my agency is represented',
            'I don’t spend enough time with my family',
            'I sleep 4 hours a night; on a good day',
            'I’ve put on too much weight',
            'I can’t take a step back without being an embarrassment ',
            'I’m doing way worse than people think',
            'I regret starting this business',
            





           
          ].map((feature) => (
            <li key={feature} className="flex">
              <CheckIcon className="h-8 w-8 flex-none fill-blue-500" />
              <span className="ml-4">{feature}</span>
            </li>
          ))}
        </ul>
        <p className="mt-8">
        
How many of those can you agree with? 

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
