import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import { GitHubIcon, LinkedInIcon } from '@/components/Icons';
import portraitImage from '@/images/portrait.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Alexandre Serra</title>
        <meta name="description" content="I'm Alexandre Serra. I live in Lisbon, where I build software." />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I'm Alexandre Serra. A Software Engineer Dedicated to Solving Real-World Problems.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I am a software engineer with a deep-rooted passion for computers that dates back to my early childhood.
                Ever since I was 10 years old, I have been fascinated by the world of technology and have continuously
                nurtured my interest in this field. This fascination eventually led me to pursue a career in software
                engineering, where I could turn my passion into a profession.
              </p>
              <p>
                One of the aspects I truly enjoy about being a software engineer is the ability to build software that
                solves real-world problems and positively impacts people's lives. I find immense satisfaction in
                developing applications and systems that provide meaningful solutions, whether it's streamlining
                business processes, enhancing communication, or improving the overall efficiency of a particular task.
                Being able to witness the tangible impact of my work is what drives me forward in this field.
              </p>
              <p>
                In addition to my dedication to software engineering, I have also dedicated a significant portion of my
                life to being a water polo athlete. For over 11 years, I have immersed myself in the world of this
                competitive sport, constantly striving to improve my skills and reach new heights. Representing my
                national team has been an incredible honor, allowing me to compete at the highest level and showcase my
                commitment, discipline, and teamwork.
              </p>
              <p>
                One of the defining characteristics that sets me apart both as a software engineer and an athlete is my
                relentless pursuit of perfection. I approach every task with meticulous attention to detail and a
                determination to achieve excellence. This perfectionist mindset drives me to constantly refine my
                skills, refine my code, and deliver high-quality work. It's this dedication to perfection that has made
                me a highly skilled professional in my field.
              </p>
              <p>
                Overall, I am a software engineer who combines a lifelong passion for computers with a desire to make a
                meaningful impact through my work. With a background in water polo, I bring the same level of
                dedication, discipline, and teamwork to my professional endeavors. Through my unwavering commitment to
                perfection, I strive to deliver exceptional results in every project I undertake.
              </p>
              <p className="text-sm">
                <em>Yes, this text was written with the help of a LLM.</em>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40">
                spencer@planetaria.tech
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
