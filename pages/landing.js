import Layout from '../components/layout'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../components/layout.module.scss'

export default function Landing() {
  return (
    <>
      <Head>
        <title>Madhorse Landing</title>        
      </Head>
      <Layout>
        <h1>Landing page</h1>
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
      </Layout>
    </>
  )
}
