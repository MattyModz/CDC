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
          “ How many of these beliefs creep into your subconscious as you lay awake at night?
.
        </p>
        <p className="mt-4">
        Eating away at your confidence and gnawing at your zealousness until you wake as nothing but a ruptured, melted puddle of anxiety. 

If you can firmly say you’ve never experienced those beliefs, you can stop reading now.
But if you’re sick of feeling this way, of allowing the tilde-wave of entrepreneur shakes, shivers, and sweat to keep you up at night and away from your family, then we have a solution for you. 
 <br/><br/>For 5 minutes every morning, we’ll share with you a video designed to trail through the foreboding worries of an agency owner and, better yet, how to fix them. 

This challenge is raw, vulnerable, and the utterly naked truth of an agency owner. <br/><br/>

There will be tears and tribulations, swearing, and salvation. 

There will be scientific studies and research alongside real agency owners’ advice and personal stories.

You’ll be part of the Worrying Warriors group, where you can discuss the Chapters of this challenge and share your journey with others. 

        </p>
        <p className="mt-4">So what do you get?
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
        Sign up below when you’re ready to secure your mind, build your business, and take care of your health, without sacrificing your work schedule, before our limited time discount runs out. 
        </p>
        <p className="mt-10">
          <Link
            href="#free-chapters"
            className="text-base font-medium text-blue-600 hover:text-blue-800"
          >
        Purchase the book {' '}
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </p>
      </Container>
    </section>
 

  
      <Pricing />
    
      <Author />
      <Footer />
    </>
  )
}
