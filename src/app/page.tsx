import Image from 'next/image'
import wyslacLogo from './assets/wyslac-logo.png'
import dashboard from './assets/dashboard-pic.png'
import CountryFlag from './assets/countryFlag.png'
import BorderFinance from './components/borderFinance'
import WyslacFeatures from './components/wyslacFeatures'
import styles from './page.module.css';

export default function Home() {
  
            
      const ImageSrc = <Image src={CountryFlag} alt="Country-flag" />
       const stats = [
        {
            number: `${24}hrs`,
            result: "time it takes to complete and process transaction on wyslac"
        },
        {
            number: `${100}%`,
            result: "Compliance with international financial regulations & standards"
        },
        {
            number: `${100}+`,
            result: "Countries we are currently transact to and from."
        },
        {
            number: `${99}%`,
            result: "Transaction completion rate across all countries."
        }
    ]


    return (
        <div className={styles.page}>
            <div className={styles.nav}> 
              <Image src={wyslacLogo} alt="wyslac Logo" />
                <div className={styles.auth}>
                  <p className={styles.signin}>Sign In</p>
                  <p className={styles.access}>Request Access</p>
                </div>
            </div>
            <div className={styles.hero}>
                <h1 className={styles.heroHeader}>Pay your supplies in over 100 countries {ImageSrc} with wyslac</h1>
                <div className={styles.wyslacp}>Expand your business reach by making international payment, ensuring 
                    your suppliers recieve funds promptly, no matter where they are located.
                </div>
            </div>
            <div className={styles.image1}>
              <Image src={dashboard} alt="dashbord-pic" />
            </div>
            <div className={styles.industries}>
                <div className={styles.industriesTitle}>Used and loved by industries all over the world</div>
                <div className={styles.industriesLogo}>

                </div>
            </div>
            <div className={styles.wyslacImpact}>
                <div className={styles.wyslacImpactHeader}>Our impact on businesses by the number…</div>
                <div className={styles.wyslacp}>Explore the measurable success we’ve brought to businesses worldwide, 
                    showcasing our growth and impact through key metrics and data.</div>
            </div>
            <div className={styles.stats}>
                  {stats.map((stat) => {
                          return <div
                            key={stat.number}
                            className={styles.wyslacStats}>
                              <div className={styles.wyslacStatsHeader}>{stat.number}</div>
                              <div className={styles.wyslacStatsP}>{stat.result}</div>
                          </div>
                      })}
                </div>
            <div className={styles.wyslacFeatures}>
                <div className={styles.wyslacFeaturesHeader}>Powerful features to elevate your business</div>
                <div className={styles.wyslacFeaturesp}>Access a powerful set of tools built to simplify your workflow, boost productivity, and fuel business growth. 
                    Our platform provides everything you need to succeed in today’s fast-moving global market.</div>
                <WyslacFeatures />
            </div>
            <div className={styles.wyslacScroll}>
                Discover a financial solution that outshines traditional banks—combining strength and elegance in one seamless service. 
                Enjoy a powerful, refined experience with features that break free from the limits of conventional banking.
            </div>
            <BorderFinance />
            <div>
                
            </div>
        </div> 
  );
}


