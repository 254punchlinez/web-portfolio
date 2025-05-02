"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ExpertiseSection />
        <PortfolioSection />
      </main>
      <Footer />
    </div>
  )
}

function Header({ darkMode, setDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-teal-600 dark:text-teal-500">UI Portfolio</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
            Home
          </Link>
          <Link href="#about" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
            About
          </Link>
          <Link href="#services" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
            Services
          </Link>
          <Link href="#portfolio" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
            Blog
          </Link>
          <Link href="#portfolio" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
            Pages
          </Link>
          <Link href="#contact" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition-colors">
            Hire Me
          </button>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <Link href="/" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
              Home
            </Link>
            <Link href="#about" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
              About
            </Link>
            <Link href="#services" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
              Services
            </Link>
            <Link href="#portfolio" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
              Blog
            </Link>
            <Link href="#portfolio" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
              Pages
            </Link>
            <Link href="#contact" className="font-medium hover:text-teal-600 dark:hover:text-teal-500">
              Contact
            </Link>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium transition-colors w-full">
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

function HeroSection() {
  return (
    <section className="relative py-20 bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h2 className="text-2xl font-medium mb-4">Hi, I'm John Watson</h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-800 dark:text-white">
              Web <span className="text-teal-600 dark:text-teal-500">Developer</span>
            </h1>
            <p className="text-lg mb-8 max-w-lg">
              I love Graphic design and Photography and have been working on my portfolio since 2016. I Can give your
              business a new Creative start right away!
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-medium transition-colors">
                Hire Me
              </button>
              <button className="border border-gray-300 dark:border-gray-700 hover:border-teal-600 dark:hover:border-teal-500 px-8 py-3 rounded-full font-medium transition-colors">
                My Portfolio
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="John Watson"
                width={400}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Side navigation */}
      <div className="hidden lg:block fixed right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white py-6 px-2 rounded-l-lg">
        <div className="flex flex-col items-center space-y-8">
          <button className="p-2 hover:text-teal-500" aria-label="Next">
            <ArrowRight size={20} />
          </button>
          <button className="p-2 hover:text-teal-500" aria-label="Back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </button>
          <button className="p-2 hover:text-teal-500" aria-label="Download">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </button>
          <button className="p-2 hover:text-teal-500" aria-label="Buy">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <Image
              src="/placeholder.svg?height=600&width=500"
              alt="John Watson"
              width={500}
              height={600}
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-sm font-medium text-teal-600 dark:text-teal-500 uppercase tracking-wider mb-2">
              MY BIOGRAPHY
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Lead UI Designer & Web Developer Based In UK</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I love Graphic design and Photography and have been working on my portfolio since 2016. I Can give your
              business a new Creative start right away! Contact me and we will discuss your projects!
            </p>

            <div className="grid grid-cols-2 gap-y-4 mb-8">
              <div>
                <span className="font-medium">Name:</span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">John Watson</span>
              </div>
              <div>
                <span className="font-medium">From:</span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">London, UK</span>
              </div>
              <div>
                <span className="font-medium">Email:</span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">example@mail.com</span>
              </div>
              <div>
                <span className="font-medium">Phone:</span>
                <span className="text-gray-600 dark:text-gray-400 ml-2">+21 234 567 8901</span>
              </div>
            </div>

            <div className="mb-8">
              <p className="font-medium mb-3">Follow me on</p>
              <div className="flex space-x-4">
                <a href="#" className="text-teal-600 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-400">
                  <span className="sr-only">Behance</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.162-.358 1.613-.24.458-.571.833-.989 1.128-.423.291-.915.51-1.477.651-.571.138-1.174.208-1.809.208H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707-.103-.189-.242-.335-.416-.437-.174-.105-.369-.176-.586-.215-.217-.038-.435-.058-.652-.058H4.89v2.881h2.562zm.162 5.201c.251 0 .487-.022.704-.067.219-.044.41-.117.568-.215.158-.102.287-.234.375-.401.091-.166.138-.383.138-.649 0-.518-.157-.901-.477-1.146-.318-.242-.766-.365-1.351-.365H4.89v2.843h2.724z" />
                    <path d="M16.803 17.09c.395.351.962.527 1.701.527.531 0 .989-.135 1.379-.405.386-.267.621-.555.713-.857h2.344c-.377 1.151-1.004 1.976-1.893 2.483-.879.509-1.941.762-3.199.762-.867 0-1.65-.137-2.344-.415-.697-.279-1.289-.677-1.773-1.204-.492-.526-.863-1.163-1.117-1.919-.261-.758-.387-1.599-.387-2.527 0-.896.127-1.725.387-2.483.254-.763.631-1.416 1.117-1.952.492-.539 1.082-.96 1.773-1.263.694-.306 1.477-.46 2.344-.46.944 0 1.763.187 2.455.56.694.371 1.27.88 1.729 1.525.46.644.789 1.392.985 2.245.196.856.271 1.765.229 2.723h-7.032c.035.763.211 1.381.535 1.66zm2.969-5.943c-.318-.307-.789-.46-1.406-.46-.396 0-.738.073-1.022.219-.283.146-.511.329-.692.55-.18.222-.308.458-.387.704-.077.245-.12.458-.126.641h4.391c-.067-.705-.271-1.347-.758-1.654z" />
                    <path d="M20.4 5.961h-4.949V4.33H20.4v1.631z" />
                  </svg>
                </a>
                <a href="#" className="text-teal-600 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-400">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="text-teal-600 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-400">
                  <span className="sr-only">Facebook</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" className="text-teal-600 hover:text-teal-700 dark:text-teal-500 dark:hover:text-teal-400">
                  <span className="sr-only">Twitter</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Hire me
              </button>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do For You</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-teal-600 dark:text-teal-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Web Development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-teal-600 dark:text-teal-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">App development</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="text-teal-600 dark:text-teal-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">Photography</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit accusa ntium dolor emque laudan.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="inline-flex items-center text-teal-600 dark:text-teal-500 font-medium hover:underline">
            More Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 ml-2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 gap-6">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Skills illustration"
                width={500}
                height={300}
                className="rounded-lg mb-6"
              />
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Skills illustration"
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-sm font-medium text-teal-600 dark:text-teal-500 uppercase tracking-wider mb-2">
              MY SKILLS
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">My Featured Skills</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              I Specialize in Branding and Strategy, and am passionate about creating Awesome Portfolio work. And I
              always ready to impress the audience with my Creativity.
            </p>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">UI/UX Design</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Ideas & Technology</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Branding Design</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Responsive Web Design</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div className="h-full bg-teal-600 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExpertiseSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-12 md:mb-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 mb-8">
                <div className="text-teal-600 dark:text-teal-500 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Web Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <div className="text-teal-600 dark:text-teal-500 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Design Trends</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <div className="text-teal-600 dark:text-teal-500 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Research & Analysis</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <div className="text-teal-600 dark:text-teal-500 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Customer support</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <div className="text-teal-600 dark:text-teal-500 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Responsive design</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 mb-8">
                <div className="text-teal-600 dark:text-teal-500 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">PSD Design</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Lorem ipsum viverra libero set. Pellen ut justo, in ligula at.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <Image
              src="/placeholder.svg?height=600&width=400"
              alt="John Watson"
              width={400}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 text-center">
          <div>
            <h3 className="text-4xl font-bold mb-2">135</h3>
            <p className="text-gray-600 dark:text-gray-400">Finished Projects</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">225</h3>
            <p className="text-gray-600 dark:text-gray-400">Working Hours</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">115</h3>
            <p className="text-gray-600 dark:text-gray-400">Online Support</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-2">272</h3>
            <p className="text-gray-600 dark:text-gray-400">Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Success Work</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Image
                src={`/placeholder.svg?height=300&width=400&text=Project ${item}`}
                alt={`Portfolio item ${item}`}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div className="mt-20 py-12 bg-teal-700 rounded-lg">
          <div className="flex flex-wrap justify-center gap-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-center">
                <Image
                  src={`/placeholder.svg?height=80&width=120&text=Client ${item}`}
                  alt={`Client ${item}`}
                  width={120}
                  height={80}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Link href="/" className="flex items-center space-x-2 mb-6">
            <span className="text-2xl font-bold text-teal-500">UI Portfolio</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-2 text-teal-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+12 345 678 900</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-2 text-teal-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@example.com</span>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5 mr-2 text-teal-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>208 Avenue street, UK - 62617</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 UI Portfolio. All Rights Reserved</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <span className="sr-only">Facebook</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <span className="sr-only">Google Plus</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <span className="sr-only">Pinterest</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-500 transition-colors">
              <span className="sr-only">VK</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.162 18.994c.609 0 .858-.406.851-.915-.031-1.917.714-2.949 2.059-1.604 1.488 1.488 1.796 2.519 3.603 2.519h3.2c.808 0 1.126-.26 1.126-.668 0-.863-1.421-2.386-2.625-3.504-1.686-1.565-1.765-1.602-.313-3.486 1.801-2.339 4.157-5.336 2.073-5.336h-3.981c-.772 0-.828.435-1.103 1.083-.995 2.347-2.886 5.387-3.604 4.922-.751-.485-.407-2.406-.35-5.261.015-.754.011-1.271-1.141-1.539-.629-.145-1.241-.205-1.809-.205-2.273 0-3.841.953-2.95 1.119 1.571.293 1.42 3.692 1.054 5.16-.638 2.556-3.036-2.024-4.035-4.305-.241-.548-.315-.974-1.175-.974h-3.255c-.492 0-.787.16-.787.516 0 .602 2.96 6.72 5.786 9.77 2.756 2.975 5.48 2.708 7.376 2.708z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
