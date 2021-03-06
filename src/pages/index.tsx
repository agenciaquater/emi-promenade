import Head from 'next/head'
import Script from 'next/script'
import { NextSeo } from 'next-seo'

import { Header } from '../components/Header'
import { MainForm } from '../components/MainForm'

import { AbsoluteHeader } from '../components/AbsoluteHeader'
import { ResponsiveHeader } from '../components/ResponsiveHeader'
import { AboutSection } from '../components/AboutSection'
import { InteriorShots } from '../components/InteriorShots'
import { PlantaBaixa } from '../components/PlantaBaixa'
import { VirtualTour } from '../components/VirtualTour'
import { Location } from '../components/Location'
import { Footer } from '../components/Footer'

import styles from '../styles/Home.module.scss'
import { GetServerSideProps } from 'next'

interface IndexProps {
  apikey: string;
}

export default function Home({apikey}: IndexProps) {
  return (
    <div className={styles.wrapper}>

      <NextSeo 
        title="Condomínio Residencial Promenade"
        description="Condomínio muito bem localizado no bairro Santana de Porto Alegre, com infraestrutura perfeita para seu conforto, lazer e segurança."
        canonical="https://promenade.emiempreendimentos.com.br/"
        openGraph={{
          url: 'https://promenade.emiempreendimentos.com.br/',
          title: 'Condomínio Residencial Promenade',
          description: 'O melhor endereço de apartamentos de 80m² a 103m² com 2 ou 3 suítes, áreas condominiais e de lazer no bairro Santana, a 2 minutos do Parque da Redenção.',
          images: [
            {
              url: '/images/home-bg-webp',
              width: 800,
              height: 600,
              alt: 'Condomínio Residencial Promenade',
            }
          ]
        }}
      />

      <Script strategy="lazyOnload">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer',"GTM-MSZ3BBF");
        `}
      </Script>

      <Head>
        <title>EMI | Promenade</title>
      </Head>

      <div className={styles.container} id="home">
        <Header />

        <ResponsiveHeader />

        <main className={styles.main}>
          <div className={styles.introductionText}>
            <img src="/images/promenade-logo.webp" alt="on the park"/>

            <h3><span>APARTAMENTOS DE 65m² ATÉ 68m² COM 2 DORMITÓRIOS <br />NO BAIRRO SANTANA.</span></h3> 
          </div>

          <MainForm />
        </main>
      </div>

      <AbsoluteHeader />
      <AboutSection />
      <InteriorShots />
      
      <div className={styles.sideDash1}></div>

      <PlantaBaixa />

      <div className={styles.sideDash2}></div>

      <VirtualTour />
      <Location apikey={apikey} />
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const apikey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  
  return {
    props: {
      apikey,
    }
  }
}
