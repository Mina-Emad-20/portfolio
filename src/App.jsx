import { useEffect, useState } from 'react'
import Header from './components/1-header/Header'
import HeroSection from './components/2-heroSection/HeroSection'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'


function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }
    )
  }, [])

  const [showScroll, setShowScroll] = useState(false)

  return (
    <>
      <div id='up' className='container'>
        <Header />
        <HeroSection />
        <div className='devider' />
        <Main />
        <div className='devider' />
        <Contact />
        <div className='devider' />
        <Footer />
        {showScroll && (
          <a href="#up">
            <div className="scroll-button icon-keyboard_arrow_up"></div>
          </a>
        )}
      </div>
    </>
  )
}

export default App
