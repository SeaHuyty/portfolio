import { motion } from 'framer-motion';

export default function Experience({ textEnter, textLeave }) {
  return (
    <motion.section id="experience" className="two"
      initial = {{ opacity: 0 }}
        whileInView = {{ 
          opacity: 1, 
          transition: {
            duration: 1
          }
        }}
      >
      <div className='header'>
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Experience</p>
      </div>
      <div className='item'>
        <img src="R.png" alt="cloud" className='cloud1' />
        <img src="R.png" alt="cloud" className='cloud2' />
        <img src="R.png" alt="cloud" className='cloud3' />
        <img src="R.png" alt="cloud" className='cloud4' />
        <img src="ufo.png" alt="ufo" className='ufo' />
        <img src="floatingAstro.png" alt="floating Astro" className='floatingAstro' />
        <div className="container first-container block">
          <h2>Photo Phnom Penh Association</h2>
          <small>Nov 2024 - Dec 2024</small>
          <p>Developed QR Code Generator, Scanner, and Frame Generator in Python to support two event days of Tuk-Tuk tour. Ensured secure and efficient data handling, ticket validation and email distribution.</p>
        </div>
        <div className="container second-container block">
          <h2>None</h2>
          <small>None</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iste non natus quas impedit error similique sint aliquid perferendis distinctio?</p>
        </div>
        <div className="container third-container block">
          <h2>None</h2>
          <small>None</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur iste non natus quas impedit error similique sint aliquid perferendis distinctio?</p>
        </div>
      </div>
    </motion.section>
  );
}