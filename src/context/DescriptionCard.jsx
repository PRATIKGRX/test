import React, { useState } from 'react';
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
const DescriptionCard = ({ pic, description }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleImageClick = () => {
    setIsFullScreen(true);
  };

  const handleClose = () => {
    setIsFullScreen(false);
  };
  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isFullScreen]); 
  return (
    <>
      <div className='py-2 flex flex-col gap-1'>
        <div className='w-full rounded-xl overflow-hidden cursor-pointer' onClick={handleImageClick}>
          <img src={pic} alt="description" className='w-full h-[300px] object-cover object-center' />
        </div>
        <div>
          <p className='text-lg'>{description}</p>
        </div>
      </div>

   
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm bg-black/60 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={pic}
              alt="fullscreen"
              className="max-w-full max-h-full object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.button
              onClick={handleClose}
              className="absolute top-5 right-5 text-2xl text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <GrClose />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DescriptionCard;
