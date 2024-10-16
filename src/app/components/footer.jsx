// components/Footer.js
import Image from 'next/image'
import footerLogo from '../assets/Group 52709.png'
import styles from "../page.module.css";

function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContainerText}>Let&apos;s work together</div>
        <div className={styles.info}>
          <div>
            <div className={styles.footerContainerp}>helpdesk@wyslac.com</div>
            <div className={styles.footerContainerp}>+1 235 5466 778</div>
          </div>
          <div>
            <div className={styles.footerContainerp}>56 Megan Crescent, Barrie, ON L4N 6E4, Canada.</div>
          </div>
          <div className={styles.socialLinks}>
            <a href="#">LinkedIn</a>
            <span>X</span>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className={styles.logoSection}>
          <Image src={footerLogo} alt="Wyslac Logo" className={styles.logo} />
          <div className={styles.logop}>
            <div className={styles.logoSectionp}>Wyslac © 2024</div>
            <div className={styles.logoSectionp}>Designed by Obinna Onyemeh</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
