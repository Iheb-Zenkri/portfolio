'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/work";

export default function Home() {

  const [isDarkMode,setIsDarkMode] = useState(false);

  useEffect(()=>{
    if(localStorage.theme === 'dark' || (!('theme' in localStorage) &&
     window.matchMedia('(prefers-color-sheme: dark)').matches)){
      setIsDarkMode(true)
    }else{
      setIsDarkMode(false)
    }
  },[])

  useEffect(()=>{
    if(isDarkMode){
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark';
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.theme = '';
    }
  },[isDarkMode]);

  useEffect(() => {
    fetch('/api/track')
        .then(res => res.json())
        .catch(err => console.error('Error tracking visitor:', err));
}, []);

  return (
   <>
   <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
   <Header />
   <About isDarkMode={isDarkMode} />
   <Services/>
   <Work isDarkMode={isDarkMode} />
   <Contact/>
   <Footer isDarkMode={isDarkMode} />
   </>
  );
}
