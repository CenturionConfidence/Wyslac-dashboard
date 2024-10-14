"use client";

import { useState } from 'react';
import Image from 'next/image'
import styles from '../page.module.css';
import Fast from '../assets/fast.png'
import Currency from '../assets/currrency.png'
import Easy from '../assets/easy1.png'


function WyslacFeatures() {
    const [activeFeature, setActiveFeature] = useState("easy-payment");

    const feature = [
      {
        id: "easy-payment",
        label: "Easy Payment",
        image: <Image src={Currency} alt="different-currency"/>, // Replace with actual path
      },
      {
        id: "different-currencies",
        label: "Different Currencies",
        image: <Image src={Fast} alt="fast-payment"/>, // Replace with actual path
      },
      {
        id: "fast-efficient",
        label: "Fast & Efficient",
        image: <Image src={Easy} alt="Easy-payment"/>, // Replace with actual path
      }
    ];

    // const features = [
    //     {
    //         imageHead: <Image src={} alt="Easy-payment"/>,
    //         title: 'EASY PAYMENT',
    //         header: 'Cross-border Payments made easy',
    //         paragraph: 'Effortlessly manage international transactions with a seamless payment solution that simplifies cross-border payments.',
    //         imageSrc: <Image src={} alt="Easy-payment"/>
    //     },
    //     {
    //         imageHead: <Image src={} alt="Easy-payment"/>,
    //         title: 'DIFFERENT CURRENCY',
    //         header: 'Cross-border Payments made easy',
    //         paragraph: 'Effortlessly manage international transactions with a seamless payment solution that simplifies cross-border payments.',
    //         imageSrc: <Image src={} alt="Different-currency"/>
    //     },
    //     {
    //         imageHead: <Image src={} alt="Easy-payment"/>,
    //         title: 'FAST AND EFFICIENT',
    //         header: 'Cross-border Payments made easy',
    //         paragraph: 'Effortlessly manage international transactions with a seamless payment solution that simplifies cross-border payments.',
    //         imageSrc: <Image src={} alt="fast-payment"/>
    //     }
    // ]

    return(
        <>
            <div className={styles.WyslacFeaturesContainer}>
                {feature.map((feature) => (
                    <div
                        key={feature.id}
                        className={`feature-item ${activeFeature === feature.id ? 'active' : ''}`}
                        onClick={() => setActiveFeature(feature.id)}>
                    {feature.image}
                    <span className="feature-label">{feature.label}</span>
                    </div>
                ))}
            </div>
            <div>

            </div>
        </>
    )
}

export default WyslacFeatures


     
    