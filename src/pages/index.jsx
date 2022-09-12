import Head from 'next/head'
import Link from 'next/link'

import { CheckIcon } from '@/components/CheckIcon'
import { Container } from '@/components/Container'
import { Author } from '@/components/Author'
import { Footer } from '@/components/Footer'
import { FreeChapters } from '@/components/FreeChapters'
import { Hero } from '@/components/Hero'
import { Introduction } from '@/components/Introduction'
import { NavBar } from '@/components/NavBar'
import { Pricing } from '@/components/Pricing'
// import { Resources } from '@/components/Resources'
import { Screencasts } from '@/components/Screencasts'
import { TableOfContents } from '@/components/TableOfContents'
import { Testimonial } from '@/components/Testimonial'
import { Testimonials } from '@/components/Testimonials'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Everything Starts as a Square - Get lost in the world of icon design
        </title>
        <meta
          name="description"
          content="A book and video course that teaches you how to design your own icons from scratch. "
        />
      </Head>
      <Hero />
      <Introduction />
      <NavBar />
      <TableOfContents />
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
      <Testimonial
        id="testimonial-from-tommy-stroman"
        author={{
          name: 'Tommy Stroman',
          role: 'Front-end developer',
          image: avatarImage1,
        }}
      >
        <p>
          “I didn’t know a thing about icon design until I read this book. Now I
          can create any icon I need in no time. Great resource!”
        </p>
      </Testimonial>
      <Screencasts />
      <Testimonial
        id="testimonial-from-gerardo-stark"
        author={{
          name: 'Alex chapman',
          role: 'Director Searcharoo ',
          image: avatarImage2,
        }}
      >
        <p>
          “I’ve tried to create my own icons in the past but quickly got
          frustrated and gave up. Now I sell my own custom icon sets online.”
        </p>
      </Testimonial>
  
      <FreeChapters />
      <Pricing />
    
      <Author />
      <Footer />
    </>
  )
}
