import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Research from './components/Research'
import Consulting from './components/Consulting'
import OpenSource from './components/OpenSource'
import Footer from './components/Footer'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col transition-colors duration-200">
        <Header />
        <main className="flex-grow pt-16">
          <Hero />
          <Services />
          <Research />
          <Consulting />
          <OpenSource />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App