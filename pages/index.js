import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/layout.module.scss'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Madhorse Riding</title>
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

        <div className={styles.logo}>
          <Image
            src="/images/madhorse-corp-logo.svg"
            alt="Madhorse Corp. Logo"
            height="56px"
            width="260px"
          />
        </div>
        

        <div className={styles.landingTextContainer}>
          <div className={styles.subtitle}>
            Powering Machine Learning trading solutions for the financial sector
          </div>          

          <div className={styles.bodyTex}>            
            <div className={styles.signature}>
              <div>
                <a href="mailto:info@madhorse.io">info@madhorse.io</a>
              </div>              
              <div className={styles.signatureHandle}>
                
                <div className={styles.socialIcon}>
                  <Image
                    src="/images/twitter.svg"
                    alt="Bitcoin"
                    height="24px"
                    width="24px"
                  />
                </div>
                <div><a href="https://twitter.com/Madhorseride">@madhorseride</a></div>
              </div>
            </div>
            
          </div>

          <div className={styles.about}>
            Madhorse Corp. is a privately held company incorporated in the British Virgin Islands
          </div>

          
        </div>          
          

      </Layout>
    </>
  )
}
