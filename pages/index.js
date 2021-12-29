import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import { getProviders, getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Modal from "../components/Modal";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
import Widgets from "../components/Widgets";

export default function Home({ providers }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session)
    return (
      <>
        <Head>
          <title>Twitter</title>
          <link rel="icon" href="/twitter.svg" />
        </Head>
        <Login providers={providers} />
      </>
    );

  return (
    <div>
      <Head>
        <title>Twitter</title>
        <link rel="icon" href="/twitter.svg" />
      </Head>
      <main className="flex bg-black min-h-screen max-w-[1500px] mx-auto">
        <Sidebar />
        <Feed />
        <Widgets />
        {isOpen && <Modal />}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      providers,
      session,
    },
  };
}
