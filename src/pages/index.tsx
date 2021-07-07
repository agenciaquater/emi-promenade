import Head from 'next/head'
import { NextSeo } from 'next-seo'

import { Header } from '../components/Header'
import { MainForm } from '../components/MainForm'

import { AbsoluteHeader } from '../components/AbsoluteHeader'
import { ResponsiveHeader } from '../components/ResponsiveHeader'
import { AboutSection } from '../components/AboutSection'
import { InteriorShots } from '../components/InteriorShots'
import { PlantaBaixa } from '../components/PlantaBaixa'
import { Location } from '../components/Location'
import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.wrapper}>

      <NextSeo 
        title="Condomínio Promenade"
        description="Trabalhamos há mais de 15 anos com excelência em pós-operatório de cirurgias plásticas. Aqui você tem qualidade de vida e conforto durante sua reabilitação."
        canonical=""
      />

      <Head>
        <title>EMI | Promenade</title>
      </Head>

      <div className={styles.container} id="home">
        <Header />

        <ResponsiveHeader />

        <main className={styles.main}>
          <div className={styles.introductionText}>
            <img src="/images/promenade-logo.webp" alt="on the park"/>

            <h3><span>APARTAMENTOS DE 65m² ATÉ 68m² COM 2 DORMITÓRIOS.</span></h3> 
          </div>

          <MainForm />
        </main>
      </div>

      <AbsoluteHeader />
      <AboutSection />
      <InteriorShots />
      <PlantaBaixa />
      <Location />
      <Footer />
    </div>
  )
}
