import Head from "next/head";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}
      </main>
    </div>
  );
}
