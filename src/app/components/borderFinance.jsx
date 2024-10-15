import Image from 'next/image'
import financeImage1 from '../assets/Mask Group 252.png'
import financeImage2 from '../assets/Mask Group 253.png'
import financeImage3 from '../assets/Mask Group 255.png'

import styles from '../page.module.css'

export default function BorderFinance () {
    return(
        <>
            <div className={styles.borderFinance}>
                <div className={styles.borderFinanceHeader}>Better than your traditional bank Robust & Elegant.</div>
                <div className={styles.borderFinancep}>Equipped with cutting-edge features designed to simplify life for your finance team and create a seamless experience for your business. 
                    Our platform offers secure, effortless transactions through an intuitive interface built to enhance every step.
                </div>
            </div>

            <div className={styles.wyslacBorderFinance}>
                <div className={styles.wyslacBorderFinanceImage}>
                    <div className={styles.wyslacBorderFinanceImageTitle}>Detailed reporting and statements</div>
                    <div className={styles.wyslacBorderFinanceImagep}>See details of how your business is doing and how your money is moving. 
                        Easily download statements and reports to help you monitor and manage your transactions.
                    </div>
                    <Image 
                            className={styles.financeImage1}
                            src={financeImage1} 
                            alt='financeImage' />
                </div>
                <div className={styles.wyslacBorderFinanceImage}>
                    <div className={styles.wyslacBorderFinanceImageTitle}>Detailed reporting and statements</div>
                    <div className={styles.wyslacBorderFinanceImagep}>See details of how your business is doing and how your money is moving. 
                        Easily download statements and reports to help you monitor and manage your transactions.
                    </div>
                    <Image 
                            className={styles.financeImage1}
                            src={financeImage2} 
                            alt='financeImage' />
                  </div>
                  <div className={styles.wyslacBorderFinanceImage}>
                    <div className={styles.wyslacBorderFinanceImageTitle}>Detailed reporting and statements</div>
                    <div className={styles.wyslacBorderFinanceImagep}>See details of how your business is doing and how your money is moving. 
                        Easily download statements and reports to help you monitor and manage your transactions.
                    </div>
                    <Image 
                            className={styles.financeImage1}
                            src={financeImage3} 
                            alt='financeImage' />
                  </div>
             </div>
        </>
    )
}