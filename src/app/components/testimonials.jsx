"use client";

import Image from 'next/image';
import customerImage1 from '../assets/Ellipse 6416.png'
import customerImage2 from '../assets/Ellipse 6416-1.png'
import customerImage3 from '../assets/Ellipse 6416-2.png'
import testimonialGraffiti from '../assets/Path 65966.png'
import heroCaptionImage3 from '../assets/Rectangle 7262-2.png'
import { useState } from 'react';
import styles from '../page.module.css';

function Testimonials(){
    const [currentIndex, setCurrentIndex] = useState(0);
   

const testimonials = [
    {
        id: 1,
        quote: "Switching to this platform has transformed how we handle international payments. We can now pay our suppliers across multiple countries quickly and with zero hassle. The user-friendly interface & transparent pricing make it far superior to our old banking system.",
        name: "Tage Kene-Okafor",
        position: "CEO, Voidloop Shipping Enterprise Limited",
        image: <Image
            src={customerImage1}
            alt='Tage Kene-Okafor'
            width={50}
            height={50}
            className={styles.authorImage}
    />
    },
    {
        id: 2,
        quote: "Managing supplier payments across borders used to be a nightmare for us. Since switching to this service, everything is so much smoother. The speed and reliability of transactions have given us the confidence to scale our operations internationally.",
        name: "Tage Kene-Okafor",
        position: "CEO, Voidloop Shipping Enterprise Limited",
        image: <Image
            src={customerImage1}
            alt='Tage Kene-Okafor'
            width={50}
            height={50}
            className={styles.authorImage}/>
    },
    {
        id: 3,
        quote: "We needed a payment solution that could handle large transactions across various countries, and this platform delivered. It’s far more efficient than our traditional bank, and the security features give us peace of mind for every transaction.",
        name: "Tage Kene-Okafor",
        position: "CEO, Voidloop Shipping Enterprise Limited",
        image: <Image
            src={customerImage1}
            alt='Tage Kene-Okafor'
            width={50}
            height={50}
            className={styles.authorImage}/>
    },
    // {
    //     id: 3,
    //     quote: "We needed a payment solution that could handle large transactions across various countries, and this platform delivered. It’s far more efficient than our traditional bank, and the security features give us peace of mind for every transaction.",
    //     name: "Tage Kene-Okafor",
    //     position: "CEO, Voidloop Shipping Enterprise Limited",
    //     image: "/path-to-image/ceo3.jpg"
    // },
    // {
    //     id: 3,
    //     quote: "We needed a payment solution that could handle large transactions across various countries, and this platform delivered. It’s far more efficient than our traditional bank, and the security features give us peace of mind for every transaction.",
    //     name: "Tage Kene-Okafor",
    //     position: "CEO, Voidloop Shipping Enterprise Limited",
    //     image: "/path-to-image/ceo3.jpg"
    // }
];


    const handlePrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const currentTestimonial = testimonials[currentIndex];
    return (
        <>
        <Image 
                className={styles.testimonialGraffiti}
                src={testimonialGraffiti} 
                alt='hero-caption3'/>
            <div className={styles.testimonialCaption}>
                    <Image src={heroCaptionImage3} alt='hero-caption'/>
                    <div className={styles.heroCaptionTitle}>Cross-border finance</div>
            </div>
        <div className={styles.testimonialsContainer}>
            {/* Header Section */}
            <div className={styles.subheading}>TESTIMONIES FROM BUSINESSES</div>
            <div className={styles.header}>
                <div className={styles.subheadingTitle}>What businesses around the world think about Wyslac.</div>
                <div className={styles.subheadingp}>Our customers range from small importers to large multinationals. See what they’re saying about Wyslac.</div>
            </div>

            {/* Facts and Stories Section */}
            <div className={styles.content}>
                <div className={styles.facts}>
                    <h3>Facts and Numbers</h3>
                    <div className={styles.percentage}>
                        <span>92%</span>
                        <p>Of customers recommend Wyslac to friends and family</p>
                    </div>
                </div>

                <div className={styles.stories}>
                    <div className={styles.customerStories}>
                        <h3>Customer Stories</h3>
                        <blockquote>
                            <p>“With its intuitive dashboard and automated features, we can conveniently monitor and track our payments in real-time. Wyslac provides a transparent and cost-effective solution.”</p>
                            <footer>
                                <strong>Tage Kene-Okafor</strong> <br />
                                CEO, Voiloop Shipping Enterprise Limited
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>


            {/* Peoples Testimonials About Wyslac */}



            <div className={styles.carouselContainer}>
                    {testimonials.map((testimonial) => {
                        return <div 
                            key={testimonial}
                            className={styles.testimonialCard}>
                        <p className={styles.quote}>
                            {currentTestimonial.quote}
                        </p>
                        <div className={styles.authorInfo}>
                            {currentTestimonial.image}
                            <div>
                                <p className={styles.authorName}>{currentTestimonial.name}</p>
                                <p className={styles.authorPosition}>{currentTestimonial.position}</p>
                            </div>
                        </div>
                    </div>
                    })}
                <div className={styles.carouselControls}>
                    <button onClick={handlePrev} className={styles.prevBtn}>&lt;</button>
                    <button onClick={handleNext} className={styles.nextBtn}>&gt;</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Testimonials;
