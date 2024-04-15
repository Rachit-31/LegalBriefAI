import { useState } from "react";
import styles from "./Navbar.module.css"
import {Link} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
const Navbar=()=>{
  const [menuOpen,setMenuOpen]=useState(false)
  return(
    <nav>
    
    <div to="/" className={styles.title}>
      {/* Website */}
      <h2>GPT-3</h2>
    </div>
    
    <div className={`${styles.menu}`} onClick={() => setMenuOpen(!menuOpen)}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    
    <ul className={menuOpen ? styles.open : ""}>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
          <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500}>What is LegalBriefAI?</ScrollLink>
      </li>
        <li>
        <Link to="/services">Services</Link>
      </li> 
      <li>
        <a to="/contact">Contact</a>
      </li>
      <li>
   
      <Link to="/login" className={styles.btn} >Login</Link>
 
    </li>
    </ul>
    

  </nav>
  )
}
export default Navbar;