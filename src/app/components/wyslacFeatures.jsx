"use client";

import { useState } from 'react';
import Image from 'next/image'
import styles from '../page.module.css';
import Fast from '../assets/fast.png'
import Currency from '../assets/currrency.png'
import Easy1 from '../assets/easy1.png'
import Easy from '../assets/easy.png'
import dashboard from '../assets/Group 52728.png'


function WyslacFeatures() {
    const [toggleFeature, setToggleFeature] = useState(1);

    const handleTabChange = (index) => {
      setToggleFeature(index)
    }

    

    const featuresElememt = [
        {
            imageHead: <Image src={Easy} alt="Easy-payment"/>,
            title: 'EASY PAYMENT',
            header: 'Cross-border Payments made easy',
            paragraph: 'Effortlessly manage international transactions with a seamless payment solution that simplifies cross-border payments.',
            imageSrc: <Image src={dashboard} alt="Easy-payment"/>
        },
        {
            imageHead: <Image src={Currency} alt="Easy-payment"/>,
            title: 'DIFFERENT CURRENCY',
            header: 'Cross-border Payments made easy',
            paragraph: 'Effortlessly manage international transactions with a seamless payment solution that simplifies cross-border payments.',
            imageSrc: <Image src={dashboard} alt="Different-currency"/>
        },
        {
            imageHead: <Image src={Fast} alt="Easy-payment"/>,
            title: 'FAST AND EFFICIENT',
            header: 'Cross-border Payments made easy',
            paragraph: 'Effortlessly manage international transactions with a seamless payment solution that simplifies cross-border payments.',
            imageSrc: <Image src={dashboard} alt="fast-payment"/>
        }
    ]

    return(
        <>
          <div className={styles.tabContainer}>
            <button
              onClick={() => handleTabChange(1)} 
              className={toggleFeature === 1 ? `${styles.activeTab}` : `${styles.tab}`}>
              <span className={styles.icon}>💸</span> Easy Payment
            </button>
            <button
              onClick={() => handleTabChange(2)} 
              className={toggleFeature === 2 ? `${styles.activeTab}` : `${styles.tab}`}>
              <span className={styles.icon}>💱</span> Different Currencies
            </button>
            <button
              onClick={() => handleTabChange(3)} 
              className={toggleFeature === 3 ? `${styles.activeTab}` : `${styles.tab}`}>
              <span className={styles.icon}>⚡</span> Fast & Efficient
            </button>
          </div>

          {/* Main Content Section */}
          
          {featuresElememt.map((feature) => (
            
            <main 
            key={feature}
              className={toggleFeature === 2 ? `${styles.activeContent}` : `${styles.content}`}>
            <div className={styles.mainSectionleft}>
              {feature.imageHead}
              <h1 className={styles.title}>{feature.header}</h1>
              <p className={styles.description}>
                {feature.paragraph}
              </p>
              <button className={styles.ctaButton}>Request a Demo</button>
            </div>
            <div className={styles.dashboard}>
              <Image src={dashboard} alt="Dashboard"/>
            </div>
          </main>
          ))}
          
        
       </>
    )
}

export default WyslacFeatures


     
    