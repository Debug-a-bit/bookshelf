import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import "./components/Features"
import Features from "./components/Features"
import AISection from "./components/AISection"

export default function Home() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'rgb(253, 253, 252)' }}>
      <Navbar />
      <Hero />
      <Features />
      <AISection />
    </main>
  )
}