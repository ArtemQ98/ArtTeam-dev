import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Stack } from './components/Stack'
import { Projects } from './components/Projects'
import { Timeline } from './components/Timeline'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-void text-mist antialiased">
      <Nav />
      <main>
        <Hero />
        <Stack />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}