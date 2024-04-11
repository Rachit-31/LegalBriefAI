import styles from "./About.module.css";
import {about} from "../../Content/About";
import {features} from "../../Content/About";

const [primaryAbout] = about;
const About=()=>{
    return(
        <div data-aos="fade-right" data-aos-delay="150"  className={styles.gptabout} id="about">
            <div className={styles.whatislawbriefai}>
                <h2>{primaryAbout.ques}</h2>
                <p>{primaryAbout.content}</p>
            </div>
            <div>
                <h1>Empowering Legal Minds, One Summary at a Time.</h1>
            </div>
            <div className={styles.featurediv}>
                {features.map((feature,id)=>(
                    <div key={id} className={styles.card}>
                        <h2>{feature.heading}</h2>
                        <p><p>{feature.content}</p></p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default About;