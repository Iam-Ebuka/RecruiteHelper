import { useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import SearchComponent from './components/SearchComponent'
import Footer from './components/Footer'
import { useAppSelector } from '../redux-store/hooks'
import { selectDarkmode } from '../redux-store/slices/darkmode'

function App() {
  const darkmode = useAppSelector(selectDarkmode);
  return (
    <div style={{height: '100vh', backgroundColor: darkmode ? "#3e3e42" : "#FFFDD0"}}>
      <HeroSection />
      <SearchComponent />
      <Footer />
    </div>
  )
}

export default App
