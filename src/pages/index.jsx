import Head from 'next/head'
const BASE_URL = process.env.BASE_URL

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Frame" />
        <meta property="og:image" content={`${BASE_URL}/welcome.jpg`} />
        <meta property="fc:frame" content="vNext" />
        <meta name="fc:frame:button:1" content="Install the action" />
        <meta name="fc:frame:button:1:action" content="post_redirect"/>
        <meta property="fc:frame:image" content={`${BASE_URL}/welcome.jpg`} />
        <meta property="fc:frame:post_url" content={`${BASE_URL}api/install`} />
      </Head>
    </>
  )
}
