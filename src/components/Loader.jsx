import React from 'react';
import { motion } from 'framer-motion';

const letterPaths = {
    "w": "M40.80 22.10L40.80 36.65Q40.80 42.50 38 45.57Q35.20 48.65 29.75 48.65Q26.30 48.65 23.98 47.32Q21.65 46 20.40 43.10Q19.15 45.95 16.85 47.30Q14.55 48.65 11.05 48.65Q5.60 48.65 2.80 45.57Q0 42.50 0 36.65L0 22.10L3.55 22.10L3.55 36.35Q3.55 41 5.35 43.22Q7.15 45.45 11.05 45.45Q14.90 45.45 16.78 43.20Q18.65 40.95 18.65 36.25L18.65 22.10L22.20 22.10L22.20 36.25Q22.20 40.95 24.05 43.20Q25.90 45.45 29.80 45.45Q33.60 45.45 35.42 43.22Q37.25 41 37.25 36.35L37.25 22.10L40.80 22.10Z",
  
    "e": "M13.90 45.50Q16.35 45.50 18.43 44.63Q20.50 43.75 21.95 42.05L23.95 44.35Q22.20 46.45 19.60 47.55Q17 48.65 13.85 48.65Q9.80 48.65 6.65 46.92Q3.50 45.20 1.75 42.15Q0 39.10 0 35.25Q0 31.40 1.67 28.35Q3.35 25.30 6.30 23.60Q9.25 21.90 13 21.90Q16.50 21.90 19.32 23.50Q22.15 25.10 23.82 27.95Q25.50 30.80 25.60 34.45L4 38.65Q5 41.85 7.63 43.67Q10.25 45.50 13.90 45.50M13 24.95Q10.25 24.95 8.07 26.22Q5.90 27.50 4.68 29.77Q3.45 32.05 3.45 35Q3.45 35.75 3.50 36.10L22.05 32.50Q21.45 29.20 19 27.07Q16.55 24.95 13 24.95Z",
    "l": "M7.40 48.65Q3.85 48.65 1.92 46.65Q0 44.65 0 41.10L0 11.30L3.55 11.30L3.55 40.80Q3.55 43.15 4.65 44.38Q5.75 45.60 7.95 45.60Q9.35 45.60 10.35 45.15L10.60 48.10Q9.05 48.65 7.40 48.65Z", 
    "c": "M13.55 48.65Q9.65 48.65 6.57 46.95Q3.50 45.25 1.75 42.17Q0 39.10 0 35.25Q0 31.40 1.75 28.35Q3.50 25.30 6.57 23.60Q9.65 21.90 13.55 21.90Q16.95 21.90 19.63 23.22Q22.30 24.55 23.85 27.10L21.20 28.90Q19.90 26.95 17.90 25.97Q15.90 25.00 13.55 25.00Q10.70 25.00 8.43 26.27Q6.15 27.55 4.88 29.90Q3.60 32.25 3.60 35.25Q3.60 38.30 4.88 40.63Q6.15 42.95 8.43 44.23Q10.70 45.50 13.55 45.50Q15.90 45.50 17.90 44.55Q19.90 43.60 21.20 41.65L23.85 43.45Q22.30 46 19.60 47.32Q16.90 48.65 13.55 48.65Z", 
    "o": "M13.40 48.65Q9.60 48.65 6.55 46.92Q3.50 45.20 1.75 42.15Q0 39.10 0 35.25Q0 31.40 1.75 28.35Q3.50 25.30 6.55 23.60Q9.60 21.90 13.40 21.90Q17.20 21.90 20.25 23.60Q23.30 25.30 25.03 28.35Q26.75 31.40 26.75 35.25Q26.75 39.10 25.03 42.15Q23.30 45.20 20.25 46.92Q17.20 48.65 13.40 48.65M13.40 45.50Q16.20 45.50 18.43 44.23Q20.65 42.95 21.90 40.60Q23.15 38.25 23.15 35.25Q23.15 32.25 21.90 29.90Q20.65 27.55 18.43 26.27Q16.20 25.00 13.40 25.00Q10.60 25.00 8.38 26.27Q6.15 27.55 4.88 29.90Q3.60 32.25 3.60 35.25Q3.60 38.25 4.88 40.60Q6.15 42.95 8.38 44.23Q10.60 45.50 13.40 45.50Z", 
    "m": "M32.80 21.90Q37.75 21.90 40.58 24.75Q43.40 27.60 43.40 33.15L43.40 48.40L39.85 48.40L39.85 33.50Q39.85 29.40 37.88 27.25Q35.90 25.10 32.30 25.10Q28.20 25.10 25.85 27.62Q23.50 30.15 23.50 34.60L23.50 48.40L19.95 48.40L19.95 33.50Q19.95 29.40 17.98 27.25Q16.00 25.10 12.35 25.10Q8.30 25.10 5.92 27.62Q3.55 30.15 3.55 34.60L3.55 48.40L0 48.40L0 22.10L3.40 22.10L3.40 26.90Q4.80 24.50 7.30 23.20Q9.80 21.90 13.05 21.90Q16.35 21.90 18.78 23.30Q21.20 24.70 22.40 27.45Q23.85 24.85 26.58 23.37Q29.30 21.90 32.80 21.90Z",
    "e": "M13.90 45.50Q16.35 45.50 18.43 44.63Q20.50 43.75 21.95 42.05L23.95 44.35Q22.20 46.45 19.60 47.55Q17 48.65 13.85 48.65Q9.80 48.65 6.65 46.92Q3.50 45.20 1.75 42.15Q0 39.10 0 35.25Q0 31.40 1.67 28.35Q3.35 25.30 6.30 23.60Q9.25 21.90 13 21.90Q16.50 21.90 19.32 23.50Q22.15 25.10 23.82 27.95Q25.50 30.80 25.60 34.45L4 38.65Q5 41.85 7.63 43.67Q10.25 45.50 13.90 45.50M13 24.95Q10.25 24.95 8.07 26.22Q5.90 27.50 4.68 29.77Q3.45 32.05 3.45 35Q3.45 35.75 3.50 36.10L22.05 32.50Q21.45 29.20 19 27.07Q16.55 24.95 13 24.95Z",
  };

const letterSpacing = {
  w: 48, e: 33, l: 18, c: 30, o: 35, m: 52,
};

const heartPath = "M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z";

const DrawText = () => {
  const text = "welcome"; // Use lowercase to match keys
  let xOffset = 0;
  let totalWidth = 0;

  // Calculate total width
  Array.from(text).forEach((char) => {
    totalWidth += letterSpacing[char] || 30;
  });

  const centerOffset = (300 - totalWidth) / 2; // Center the text within the 300 width of the SVG

  return (
    <div className="h-screen w-screen bg-[#FF90BB] flex items-center justify-center">
      <svg
        viewBox="0 0 300 100" // Adjusted height for heart
        fill="none"
        stroke="white"
        strokeWidth="2"
        className="w-auto mx-auto"
        preserveAspectRatio="xMidYMid meet"
      >
        {Array.from(text).map((char, index) => {
          const path = letterPaths[char] || "";
          const currentOffset = xOffset + centerOffset; // Apply centering offset
          xOffset += letterSpacing[char] || 30; // default spacing if unknown

          return (
            <g key={index} transform={`translate(${currentOffset}, 0)`}>
              <motion.path
                d={path}  // Use the letter's single path
                fill="none"          // Ensure no fill is used
                stroke="white"       // Apply stroke color (white)
                strokeWidth="5"      // Increase stroke width to make it bold
                strokeLinecap="round" // Rounded ends for smooth lines
                strokeLinejoin="round" // Rounded joins for smooth connections
                variants={{
                  hidden: { pathLength: 0, opacity: 0 },
                  visible: {
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                      delay: index * 0.1,  // Reduce delay for smoother effect
                      duration: 1.5,        // Smooth animation duration
                      ease: "easeInOut",    // Smooth easing
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              />
            </g>
          );
        })}

        {/* Heart below text */}
        <g transform={`translate(${(300 - 40) / 2}, 60) scale(1.5)`}> 
          <motion.path
            d={heartPath}  // Heart SVG path
            fill="none"    
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: {
                pathLength: 1,
                opacity: 1,
                transition: {
                    delay: text.length * 0.1 + 0.5,  // Start after the text animations
                  duration: 1.5,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
          />
        </g>
      </svg>
    </div>
  );
};

export default DrawText;
