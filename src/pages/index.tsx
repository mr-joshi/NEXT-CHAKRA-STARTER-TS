import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CTASection from '../components/CTASection'
import ImageSection from '../components/ImageSection'
import TextSection from '../components/TextSection'
const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <TextSection/>
      <ImageSection/>
      <CTASection/>
      </div>
  )
}

export default Home
