import BestSeller from 'Components/Books/Common/BestSeller'
import Banner from 'Components/Common/Banner'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Packt | Publication</title>
        <meta name="description" content="Packt | Online Book Selling and Publication." />
        <link rel="shortcut icon" href="https://d2aov160eccqlv.cloudfront.net/271739eb287c43adb004792095a0b2fc/images/7e26cb80ef4e68f870f1e40b5ef46584.ico" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Banner />

      <BestSeller />
    </div>
  )
}
