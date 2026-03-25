import Cursor     from '@/components/Cursor'
import Nav        from '@/components/Nav'
import Hero       from '@/components/Hero'
import TechBar    from '@/components/TechBar'
import About      from '@/components/About'
import Experience from '@/components/Experience'
import Skills     from '@/components/Skills'
import Projects   from '@/components/Projects'
import OpenSource from '@/components/OpenSource'
import Blog       from '@/components/Blog'
import Learning   from '@/components/Learning'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <TechBar />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <OpenSource />
        <Blog />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
