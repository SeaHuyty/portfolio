import { motion } from 'framer-motion';

export default function Education({ textEnter, textLeave }) {
  return (
    <motion.section id="education" className="three"
      initial = {{ opacity: 0 }}
      whileInView = {{ 
        opacity: 1, 
        transition: {
          duration: 1
        }
       }}
    >
      <div className='header'>
        <p onMouseEnter={textEnter} onMouseLeave={textLeave} >Education</p>
      </div>
      <br />
      <div className="grid">
        <div id="box" className="block">
          <h2>Bachelor Degree of Computer Science</h2>
          <small>June 2024 - Present</small>
          <p>Bachelor's Degree in Computer Science with a specialization in Software Engineering from the Cambodia Academy of Digital Technology.</p>
        </div>
        <div id="box" className="block">
          <h2>None</h2>
          <small>None</small>
          <p>Intentionally Leaves Blank</p>
        </div>
      </div>
    </motion.section>
  );
}