import styles from './Footer.module.css'
const Footer=()=>{
    return(
        <div className={styles.footersection}>
            <div className={styles.footerheading}>
                <h1 className={styles.heading}>Unlocking Legal Insights with AI Precision.</h1>
            </div>
            <div className={styles.footerlink}>
                <div className={styles.logo}>
                    <h2>LegalAI</h2>
                    <p>All Rights Reserved</p>
                </div>
                <div className={styles.link}>
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>
                <div className={styles.link}>
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className={styles.link}>
                    <h4>Get In touch</h4>
                    <p>IIIT Una</p>
                    <p>800xxxxxx</p>
                    <p>rachitjainjaipur@gmail.com</p>
                </div>
            </div>
        </div>
    )
}
export default Footer;