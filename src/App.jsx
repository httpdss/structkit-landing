import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Features from './components/Features'
import Comparison from './components/Comparison'
import CodeExample from './components/CodeExample'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Nav />
      <main>
        <Hero />
        <Features />
        <Comparison />
        <CodeExample />
        <SocialProof />
      </main>
      <Footer />
    </div>
  )
}
