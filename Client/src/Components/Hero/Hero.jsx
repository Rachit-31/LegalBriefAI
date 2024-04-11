import styles from "./Hero.module.css";
import {getImageUrl} from '../../utils'
import {hero} from '../../Content/Hero'
import {Link} from 'react-router-dom';

const [firstHero] = hero;
const Hero=()=>{
    return(
        <div data-aos="zoom-in-up" data-aos-delay="300"  className={styles.gptheader} id="hero">
            <div className={styles.gptheadercontent}>
                <h1 className={styles.gradienttext}>{firstHero.heading}</h1>
                <p>{firstHero.content}</p>

{/* get started button */}
                <div>
                    <Link to='/login'><button className={styles.cta}>
                <span>Get Started</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button></Link>
                </div>

            </div>
            <div className={styles.imgcontainer}>
            <img src="/src/assets/AI/aibackground.png" alt="AI model" className={styles.gptimg}/>
            </div>
        </div>
    )
}
export default Hero;