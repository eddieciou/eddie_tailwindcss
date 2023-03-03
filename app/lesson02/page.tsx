'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Lesson02() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <html className='sm:scroll-smooth'>
      <head>
        <title>Acme Rockets</title>
      </head>
      <body className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
        <header className='sticky top-0 z-10 bg-teal-700 text-white'>
          <section className='mx-auto flex max-w-4xl items-center justify-between p-4'>
            <h1 className='text-3xl font-medium'>
              <a href='#hero'>🚀 Acme Rockets</a>
            </h1>
            <button
              className='relative h-8 w-8 cursor-pointer text-3xl md:hidden'
              onClick={() => {
                setOpenMenu(!openMenu);
              }}
            >
              {/*&#9776;*/}
              <div
                className={`absolute h-1 w-8 rounded bg-white transition-all duration-500 ${
                  openMenu ? 'top-4 rotate-[765deg]' : 'top-1.5'
                }`}
              ></div>
              <div
                className={`absolute top-4 h-1 w-8 rounded transition-all duration-500 ${
                  openMenu ? 'rotate-[720deg] bg-transparent' : 'bg-white'
                }`}
              ></div>
              <div
                className={`absolute h-1 w-8 rounded bg-white transition-all duration-500 ${
                  openMenu ? 'top-4  rotate-[675deg]' : 'top-[1.625rem]'
                }`}
              ></div>
            </button>
            <nav className='hidden space-x-8 text-xl md:block ' aria-label='main'>
              <a className='hover:opacity-90' href='#rockets'>
                Our Rockets
              </a>
              <a className='hover:opacity-90' href='#testimonials'>
                Testimonials
              </a>
              <a className='hover:opacity-90' href='#contact'>
                Contact Us
              </a>
            </nav>
          </section>
          {openMenu && (
            <section
              id='mobile-menu'
              className='absolute top-[68px] flex w-full origin-top animate-open-menu flex-col justify-items-center bg-black text-5xl'
              onClick={() => {
                setOpenMenu(false);
              }}
            >
              {/*<button className='self-end px-6 text-8xl'>&times;</button>*/}
              <nav className='flex min-h-screen flex-col items-center py-8' aria-label='mobile'>
                <a href='#hero' className='w-full py-6 text-center hover:opacity-90'>
                  Home
                </a>
                <a href='#rockets' className='w-full py-6 text-center hover:opacity-90'>
                  Rockets
                </a>
                <a href='#testimonials' className='w-full py-6 text-center hover:opacity-90'>
                  Testimonials
                </a>
                <a href='#contact' className='w-full py-6 text-center hover:opacity-90'>
                  Contact Us
                </a>
                <a href='#footer' className='w-full py-6 text-center hover:opacity-90'>
                  Legal
                </a>
              </nav>
            </section>
          )}
        </header>
        <main className='mx-auto max-w-4xl'>
          <section
            id='hero'
            className='tallscreen:section-min-height widescreen:section-min-height mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row'
          >
            <article className='sm:w-1/2'>
              <h2 className='max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl'>
                We Boldy Go{' '}
                <span className='text-indigo-700 dark:text-indigo-300'>Where No Rocker</span> Has
                Gone Before...
              </h2>
              <p className='mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left'>
                We're building rockets for the next century today. From the moon to Mars, Jupiter
                and beyond...
              </p>
              <p className='mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left'>
                Think Acme Rockets.
              </p>
            </article>
            <Image
              src='/img/rocketdab.png'
              alt='Rocket Dab'
              width='1000'
              height='1000'
              className='w-1/2'
            />
          </section>

          <hr className='mx-auto w-1/2 bg-black dark:bg-white' />

          <section
            id='rockets'
            className='tallscreen:section-min-height widescreen:section-min-height my-12 scroll-mt-20 p-6'
          >
            <h2 className='mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
              Our Rockets
            </h2>
            <ul className='mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row'>
              <li className='flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6'>
                <Image
                  src='/img/rocketman.png'
                  alt='Explorer'
                  width='1000'
                  height='1000'
                  className='mb-6 w-1/2'
                />
                <h3 className='text-center text-3xl text-slate-900 dark:text-white'>Explorer</h3>
                <p className='mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block'>
                  $
                </p>
                <p className='mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden'>
                  Affordable Exploration
                </p>
              </li>
              <li className='flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6'>
                <Image
                  src='/img/rocketride.png'
                  alt='Adventurer'
                  width='1000'
                  height='1000'
                  className='mb-6 w-1/2'
                />
                <h3 className='text-center text-3xl text-slate-900 dark:text-white'>Adventurer</h3>
                <p className='mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block'>
                  $$
                </p>
                <p className='mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden'>
                  Best Selling Rocket!
                </p>
              </li>
              <li className='flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white py-6 px-2 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6'>
                <Image
                  src='/img/rocketlaunch.png'
                  alt='Infinity'
                  width='1000'
                  height='1000'
                  className='mb-6 w-1/2'
                />
                <h3 className='text-center text-3xl text-slate-900 dark:text-white'>Infinity</h3>
                <p className='mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block'>
                  $$$
                </p>
                <p className='mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden'>
                  Luxury Starship
                </p>
              </li>
            </ul>
          </section>

          <hr className='mx-auto w-1/2  bg-black dark:bg-white' />

          <section
            id='testimonials'
            className='tallscreen:section-min-height widescreen:section-min-height my-12 scroll-mt-20 p-6'
          >
            <h2 className='mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
              Testimonials
            </h2>
            <figure className='my-12'>
              <blockquote className='relative rounded-3xl bg-teal-600 py-12 pl-14 pr-9 dark:bg-black'>
                <p
                  className='mt-2 text-left text-2xl text-white
                  before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:font-serif before:text-9xl before:text-white/25 before:content-["\201C"]
                   after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:font-serif after:text-9xl after:text-white/25 after:content-["\201D"]
                   dark:text-slate-400 sm:text-3xl'
                >
                  Acme has always been there for me. Their Explorer rocket arrived in a wooden
                  create as expected. Life-long customer! A++ shopping experience.
                </p>
              </blockquote>
              <figcaption className='mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl'>
                &#8212;Wile E. Coyote, Genius
              </figcaption>
            </figure>
            <figure className='my-12'>
              <blockquote className='relative rounded-3xl bg-teal-600 py-12 pl-14 pr-9 dark:bg-black'>
                <p
                  className='mt-2 text-left text-2xl text-white
                  before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:font-serif before:text-9xl before:text-white/25 before:content-["\201C"]
                   after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:font-serif after:text-9xl after:text-white/25 after:content-["\201D"]
                   dark:text-slate-400 sm:text-3xl'
                >
                  The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive Space Modulator
                  on several occassions.{' '}
                  <span className='italic'>This makes me very, very angry!</span> Nevertheless, K-9
                  and I have awarded Acme the Martian contract for space exploration rockets based
                  on Acme's quality and sturdy designs.
                </p>
              </blockquote>
              <figcaption className='mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl'>
                &#8212;Marvin The Martian &amp; K-9
              </figcaption>
            </figure>
            <figure className='my-12'>
              <blockquote className='relative rounded-3xl bg-teal-600 py-12 pl-14 pr-9 dark:bg-black'>
                <p
                  className='mt-2 text-left text-2xl text-white
                  before:absolute before:top-0 before:left-0 before:translate-x-2 before:translate-y-2 before:font-serif before:text-9xl before:text-white/25 before:content-["\201C"]
                   after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:font-serif after:text-9xl after:text-white/25 after:content-["\201D"]
                   dark:text-slate-400 sm:text-3xl'
                >
                  I knew I not only wanted &#8212; <span className='italic'>I needed</span> &#8212;
                  Acme's Infinity Rocket for my mission in space. Acme delivered in one day! Nothing
                  says <q className='italic'>Take me to your leader</q> like Acme's Infinity Rocket!
                  💯
                </p>
              </blockquote>
              <figcaption className='mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl'>
                &#8212;Buzz Lightyear
              </figcaption>
            </figure>
          </section>

          <hr className='mx-auto w-1/2 bg-black dark:bg-white' />

          <section
            id='contact'
            className='tallscreen:section-min-height widescreen:section-min-height my-12 scroll-mt-20 p-6'
          >
            <h2 className='mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
              Contact Us
            </h2>
            <form
              action=''
              className='mx-auto flex max-w-4xl flex-col items-start gap-4 text-2xl sm:text-3xl'
            >
              <label htmlFor='subject'>Subject:</label>
              <input
                type='text'
                id='subject'
                required
                minLength={3}
                maxLength={60}
                placeholder='Your Subject'
                className='w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl'
              />
              <label htmlFor='message'>Message:</label>
              <textarea
                name='message'
                id='message'
                required
                placeholder='Your Message'
                cols={30}
                rows={10}
                className='w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl'
              ></textarea>
              <button className='active: w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 bg-teal-500 p-3 text-white hover:bg-teal-600 dark:border-none'>
                Submit
              </button>
            </form>
          </section>
        </main>

        <footer className='bg-teal-700 text-xl text-white' id='footer'>
          <section className='mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between'>
            <address>
              <h2>Acme Rocket-Powered Products, Inc.</h2>
              555 Astro Way
              <br />
              Fairfield, New Jersey 12345-5555
              <br />
              Email: <a href='mailto:inquiries@acmerockets.com'>Inquires@AcmeRockets.com</a>
              <br />
              Phone: <a href='tel:+15555555555'>(555) 555-5555</a>
            </address>

            <nav className='hidden flex-col gap-2 md:flex' aria-label='footer'>
              <a href='#rockets' className='hover:opacity-90'>
                Our Rockets
              </a>
              <a href='#testimonials' className='hover:opacity-90'>
                Testimonials
              </a>
              <a href='#contact' className='hover:opacity-90'>
                Contact Us
              </a>
            </nav>

            <div className='flex flex-col sm:gap-2'>
              <p className='text-right'>
                Copyright &copy; <span id='year'>2022</span>
              </p>
              <p className='text-right'>All Rights Reserved</p>
            </div>
          </section>
        </footer>
      </body>
    </html>
  );
}
