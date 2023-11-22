import { NextPage, Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PagesLayout } from "@/src/components";
import { HomePage } from "@/src/screens";

export const metadata: Metadata = {
  title: 'Enzo Bozzani - Software Developer',
  description: 'Enzo Bozzani, a software developer (JavaScript, TypeScript, ReactJS, NodeJS), portfolio home page, containing general information. ',
  openGraph: {
    title: 'Enzo Bozzani - Software Developer',
    url: 'https://enzobozzani.vercel.app',
    images: '/website-img.png'
  }
}


const Home: NextPage = () => {
  return (
    <PagesLayout>
      <HomePage />
    </PagesLayout>
  )
}

export default Home;
