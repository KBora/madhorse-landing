import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/layout.module.scss'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Madhorse Landing</title>
      </Head>
      <Layout>
        <div className={styles.illustration}>
          <Image
            src="/images/madhorse-background.png" // Route of the image file
            alt="Madhorse background"
            layout="fill"
            objectFit="contain"
            className="rotate-left"
          />
          <Image
            src="/images/madhorse-horse.png" // Route of the image file
            alt="Madhorse"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className={styles.landingTextContainer}>
          <div className={styles.title}>
            Introducing MAD
          </div>
          <div className={styles.subtitle}>
            Monetary Assets Deluxe
          </div>          
          <div className={styles.bodyText}>          
            We, the founders, represent a select group of individuals, currently operating in stealth-mode, that came together to mix real expertise, real skills and real assets, in order to grow and ethically share our wealth with the crypto community willing to join us.
          </div>
          <div className={styles.bodyText}>
            We are working to create a digital token able to act as a bridge between traditional assets, like commodities such as gold, silver, platinum and other alternative assets such as wine, whisky and watches, and the very few cryptocurrencies that are worth investing in that offer the opportunity of staking, hence generating extra yield.
          </div>
          <div className={`${styles.bodyText} ${styles.isBold}`}>
            Do you like what you hear and want to join us?
          </div>
          <div className={styles.bodyText}>
            Donate here and tokens will be assigned at a 30% discount.
          </div>

          <div className={styles.bodyText}>
            <a href="https://cryptocurrencycheckout.com/donate/xrlIgsJQED">
              <button className={styles.donateButton}>
                <div className={styles.donateButtonText}>
                  Donate
                </div>
                <Image
                  src="/images/bitcoin-sign.svg"
                  alt="Bitcoin"
                  height="24px"
                  width="24px"
                  className="icon-margin-right"
                />
              </button>
            </a>

          </div>

          <div className={styles.bodyTex}>            
            <div className={styles.signature}>
              <div>Ride with us on Twitter</div>
              <div className={styles.signatureHandle}>
                <Image
                  src="/images/twitter.svg"
                  alt="Bitcoin"
                  height="24px"
                  width="24px"
                  className="icon-margin-right"
                />
                <div><a href="https://twitter.com/Madhorseride">@madhorseride</a></div>
              </div>
            </div>
            
          </div>

          
        </div>          
          

      </Layout>
    </>
  )
}
