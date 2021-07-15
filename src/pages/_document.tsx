import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends  Document{
    render(){
        return (
            <Html lang="pt-br">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    
                    <meta name="description" content="Trabalhamos há mais de 15 anos com excelência em pós-operatório de cirurgias plásticas. Aqui você tem qualidade de vida e conforto durante sua reabilitação." />

                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" />                    

                    <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}