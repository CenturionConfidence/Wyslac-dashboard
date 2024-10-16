import Image from 'next/image'
import financeImage1 from '../assets/Mask Group 252.png'
import financeImage2 from '../assets/Mask Group 253.png'
import financeImage3 from '../assets/Mask Group 255.png'
import heroCaptionImage2 from '../assets/Rectangle 7262.png'
import graffitiImage2 from '../assets/Path 68426.png'


import styles from '../page.module.css'

export default function BorderFinance () {
    return(
        <>
            <Image 
                className={styles.financeGraffiti}
                src={graffitiImage2} 
                alt='hero-caption'/>
            <div className={styles.financeCaption}>
                    <Image src={heroCaptionImage2} alt='hero-caption'/>
                    <div className={styles.heroCaptionTitle}>Cross-border finance</div>
            </div>
            <div className={styles.borderFinance}>
                <div className={styles.borderFinanceHeader}>Better than your traditional bank Robust & Elegant.</div>
                <div className={styles.borderFinancep}>Equipped with cutting-edge features designed to simplify life for your finance team and create a seamless experience for your business. 
                    Our platform offers secure, effortless transactions through an intuitive interface built to enhance every step.
                </div>
            </div>

            
            <div className={styles.container}>
            <div className={styles.leftSection}>
                <div className={styles.borderFinanceTitle}>Detailed reporting and statements</div>
                <div className={styles.borderFinanceTitlep}>See details of how your business is doing and how your money is moving. Easily download statements and reports to help you monitor and manage your transactions.</div>
                <div className={styles.card}>
                    <Image src={financeImage1} alt='hero-caption' />
                </div>
            </div>

            <div className={styles.rightSection}>
                <div className={styles.topBox}>
                    <div className={styles.borderFinanceTitle}>Instant Tracking Information</div>
                    <p>Get instant visibility on what is happening with your payments...</p>
                    <div className={styles.card}>
                    <   Image src={financeImage2} alt='hero-caption' />
                    </div>
                </div>
                <div className={styles.bottomBox}>
                    <div className={styles.borderFinanceTitle}>Notifications and Updates</div>
                    <p>Receive real-time updates on exchange rates...</p>
                    <div className={styles.card}>
                        <Image src={financeImage3} alt='hero-caption' />
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}