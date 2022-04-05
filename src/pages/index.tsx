import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import CTASection from '../components/CTASection'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
     <CTASection/>
      </div>
  )
}

export default Home
