import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function HelloWorld() {
  return (
    <>  
    <Head>

    </Head>

    <div dangerouslySetInnerHTML={{ __html: `<!-- ${"HelloWorld steps"} -->` }}/>    <html>
    <body>
        <div></div>
    </body>
    </html>

    </>
  )
}
