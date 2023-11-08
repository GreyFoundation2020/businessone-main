
import { createContext, useEffect, useState } from 'react';
import { OurWork } from './OurWork/OurWork';
import { About } from './components/About/About';
import Footer from './components/Footer';
import { Home } from './components/Home/Home';
import {Navbar} from './components/Navbar'
import { Partner } from './components/Partner/Partner';
import { Services } from './components/Services/Services';
import Sidebar from './components/Sidebar';
import { Tech } from './components/TechUsed/Tech';
import { Contact } from './components/contact/Contact';
import { FaArrowUp } from 'react-icons/fa';
import { Slider } from './components/Slider';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Triangle } from 'react-loader-spinner';

export const AppContextProvider = createContext();
function App() {
  const [loading, setLoading] = useState(false)
  const [showSideBar, setShowSideBar] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(1)
  const [showSlide, setShowSlide] = useState(false)
  const [showThisSlide, setShowThisSlide] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  const goToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

  const handleClickScroll = (index) => {
    const element = document.getElementById(`section-${index}`);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowSlide(true)
    setShowThisSlide(element)
    setCurrentIndex(index)

  };


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const values = {Aos, setShowSideBar, showSideBar, handleClickScroll, goToTop, currentIndex, setCurrentIndex, scrolled, setScrolled}

  return (
   <div className=''>
    {loading ? 
    <div className='flex flex-col justify-center items-center h-screen'>

    <Triangle
    height="80"
    width="80"
    color="#ff5b2e"
    ariaLabel="triangle-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
/> 

<p>Please wait...</p>
  </div>
:
    <AppContextProvider.Provider value={values}>
    <Sidebar/>
    <Navbar/>
    <Home/>
      {/* <Slider/> */}
    <Services/>
    <OurWork/>
    <Tech/>
    <Partner/>
    <About/>
    <Contact/>
    <Footer/>
    <FaArrowUp onClick={goToTop} className={scrolled ? 'z-[1000] fixed bottom-10 cursor-pointer right-5 border-2 text-orange-600 hover:bg-orange-600 hover:text-white hover:border-none border-orange-600 w-10 h-12 p-3 rounded-xl transition-all duration-500 ease-linear' : ''}/> 
    </AppContextProvider.Provider>
  }
   </div>
   );
  }
  
  export default App;
  