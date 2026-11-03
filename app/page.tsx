import Nav        from '@/components/Nav'
import Hero       from '@/components/Hero'
import TechBar    from '@/components/TechBar'
import About      from '@/components/About'
import Experience     from '@/components/Experience'
import WorkExperience from '@/components/WorkExperience'
import Skills         from '@/components/Skills'
import Projects   from '@/components/Projects'
import OpenSource from '@/components/OpenSource'
import Learning   from '@/components/Learning'
import Contact    from '@/components/Contact'
import Footer     from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TechBar />
        <About />
        <Experience />
        <WorkExperience />
        <Skills />
        <Projects />
        <OpenSource />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
