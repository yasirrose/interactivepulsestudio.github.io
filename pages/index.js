import Head from "next/head";
import Dashboard from './dashboard'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Dashboard Overview" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
}
