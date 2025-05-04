import React,{useRef,useState} from 'react'
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { RiMemoriesFill } from "react-icons/ri";
import { FaSortDown } from "react-icons/fa";

import { motion, AnimatePresence } from 'framer-motion';
import DescriptionCard from '../context/DescriptionCard';
import myphoto from '../assets/IMG_20240309_130404_105.jpg'
import myphoto1 from '../assets/IMG-20231231-WA0001.jpg'
import myphoto2 from '../assets/IMG-20241013-WA0003.jpg'
const Home = () => {
    const audioRef = useRef(null); // Ref for the audio element
    const [isPlaying, setIsPlaying] = useState(false); // Track play/pause state
  
    const togglePlay = () => {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle play/pause state
    };
  return (
    <>
    <main>
    <section id='home' className="pt-[clamp(50px,7vh,100px)] ">
  <div className="min-h-[calc(100vh-clamp(50px,7vh,100px))] flex items-center bg-[url('/src/assets/IMG_20250430_174707.jpg')] bg-cover bg-center text-white">
    <div className='px-5 '>
        <p className='text-4xl font-bold'>Hello, world!</p>
      <p className='text-xl'> My name is <span className='text-[#FF90BB] font-bold text-2xl'>Shristi Thapa</span>, Welcome to my little space on the internet.</p>
    </div>
  </div>
  <button
  onClick={togglePlay}
  className="bg-[#8ACCD5] text-sm text-white py-1 px-2 z-10 rounded-xl fixed bottom-2 right-2"
>
  <AnimatePresence mode="wait">
    {isPlaying ? (
      <motion.div
        key="pause"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-1"
      >
        <FaPause /> music
      </motion.div>
    ) : (
      <motion.div
        key="play"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="flex items-center gap-1"
      >
        <FaPlay /> music
      </motion.div>
    )}
  </AnimatePresence>
</button>
      
  <audio  ref={audioRef} className="hidden">
          <source src="./Sajjan Raj Vaidya - Suna Kaanchi [Official Release].mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

</section>
<section id='about' className='bg-[#F8F8E1]'>
        <div className="px-5 py-10 flex flex-col gap-3">
            <h2 className='text-2xl font-bold text-[#FF90BB]'>About Me</h2>
          <div className='text-lg font-medium text-[#3d3d3d]'>
          <p>
            I'm a cheerful, curious soul who loves simplicity, creativity, and
            learning new things. I enjoy spending time with my family, exploring
            nature, and sometimes just curling up with a good book or some
            music.  
          </p>
          <p>I'm not a techie, artist, or anything in particular — just
            someone who likes to express herself and connect with people. This
            page is just a small glimpse of who I am. Thanks for stopping by!</p>
          </div>
          <div className='flex justify-center py-2'>
          <div className='py-2 w-25 border-t-2 border-b-2 border-[#FFC1DA] flex gap-4 justify-center items-center text-3xl '>
            <a href="https://www.instagram.com/pratik_izz.me?igsh=MWU3ZGtuNmdsdmQ0Zg%3D%3D&fbclid=IwY2xjawJ_LzhleHRuA2FlbQIxMABicmlkETFXc1p5bHdkRGhsM1I3dkpwAR601V2BA_xrF3u-oKROwFFrWpyEDnQXN6ec_VatDiHO1wKrhpMgovG0FIKJZQ_aem_ngYzyzzclLkO__rrXk-HwQ"><p className='text-[#D62976]'><FaInstagram /></p></a>
            <a href="https://www.facebook.com/gurung.kochoro.3152?rdid=M7RbopBrUd7a6Hgt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F197tmX1jn7#"><p className='text-[#1877F2]'><IoLogoFacebook /></p></a>
            <p className='text-[#25D366]'><FaWhatsapp /></p>
            <p className='text-[#010101]'><FaTiktok /></p>
          </div>
          </div>
        </div>
      </section>
      <section id='gallery' className='bg-[#ffd9e8]'>
        <div className='px-5 py-6 border-t-2 border-b-2 border-[#FFC1DA]'>
          <h3 className='text-center text-2xl font-bold'>Gallery</h3>
          
          <div className='py-2 text-xl'>
            <p>Life doesn't always go as planned, but somehow it still leads you where you need to be.</p>
            <p className='text-right '> - Shristi</p>
          </div>
          <p className='text-md font-semibold my-2 flex items-center gap-1'><RiMemoriesFill />-Memories-</p>
          <div className='flex flex-col gap-4'>
            <div>
            <p className='flex gap-1 text-sm items-center'>Date: 2025-May-02<FaSortDown /></p>
            <DescriptionCard pic={myphoto} description="That quiet moment with the book was more than just a photo—it was a pause in time where I truly connected with myself. As I turned each page, I didn't just read words; I felt seen. That day, the book reminded me that growth doesn't always have to be loud—sometimes, it's in stillness where we understand the most. The lesson I took with me: healing and strength often start in silence. This memory will always remind me how powerful a simple moment of self-reflection can be."/>
            </div>
            <div>
            <p className='flex gap-1 text-sm items-center'>Date: 2025-May-02<FaSortDown /></p>
            <DescriptionCard pic={myphoto1} description="In that sacred space, everything felt still—my heart, my mind, my worries. Being there reminded me that no matter how busy or lost life feels, peace is always waiting when you pause and reconnect with faith. It wasn't just a visit—it was a moment my soul needed, and I still carry that calm with me."/>
            </div>
            <div>
            <p className='flex gap-1 text-sm items-center'>Date: 2025-May-02<FaSortDown /></p>
            <DescriptionCard pic={myphoto2} description="Wandering through unfamiliar streets far from home, I realized something beautiful—sometimes you have to step outside your world to discover parts of yourself you didn't know were missing. Japan didn't just give me memories, it gave me perspective, quiet growth, and a deep appreciation for every little moment."/>
            </div>

          </div>
        </div>
      </section>
    </main>
      <footer id='socialmedia'>
      <section className='bg-[#FFC1DA]'>
        <div className='py-8 flex flex-col gap-2'>
          <div className='flex justify-center items-center text-md text-[#ff448c] font-semibold '>
            <p className='border-r-[0.5px] pr-1 tracking-wide'>Shristi Thapa</p>
            <p className='border-l-[0.5px] pl-1 tracking-wide'>Beautiful Person</p>
          </div>
          <div className='flex justify-center items-center gap-2'>
            <p className='text-[#D93025]'><IoMailUnreadOutline /></p>
            <p>yourgamil@gmail.com</p>
          </div>
          <div className='flex flex-col gap-2'>
            <h5 className='text-center text-lg font-semibold text-[#ff448c] '>Follow Me !</h5>
            <div className='flex items-center justify-center gap-2 text-xl'>
            <a href="https://www.instagram.com/pratik_izz.me?igsh=MWU3ZGtuNmdsdmQ0Zg%3D%3D&fbclid=IwY2xjawJ_LzhleHRuA2FlbQIxMABicmlkETFXc1p5bHdkRGhsM1I3dkpwAR601V2BA_xrF3u-oKROwFFrWpyEDnQXN6ec_VatDiHO1wKrhpMgovG0FIKJZQ_aem_ngYzyzzclLkO__rrXk-HwQ"><p className='text-[#D62976]'><FaInstagram /></p></a>
            <a href="https://www.facebook.com/gurung.kochoro.3152?rdid=M7RbopBrUd7a6Hgt&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F197tmX1jn7#"><p className='text-[#1877F2]'><IoLogoFacebook /></p></a>
            <p className='text-[#25D366]'><FaWhatsapp /></p>
            <p className='text-[#010101]'><FaTiktok /></p>
            </div>
          </div>
        </div>
        <div className='border-t-1 bg-[#ffd4e5] border-b-1 '>
        <p className='text-center text-xs text-[#242424]'>© 2025 by PRATIKGRX | All rights reserved.</p>

      </div>

      </section>
      
      </footer>
    </>
  )
}

export default Home
