import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <>
      {/* <div className={styles.menu}>
        <a
          href=""
        >White paper
        </a>
        <a
          href=""
        >Roadmap
        </a>
        <a
          href=""
        >Tokenomics
        </a>
        <a
          href=""
        >Dashboard
        </a>
        <a
          href=""
        >NFT
        </a>
      </div> */}
      <div className={styles.container}>  
        <main className={styles.main}>
          {children}
        </main>
      </div>      
    </>
  )
  
}