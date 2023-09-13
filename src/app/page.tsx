import Contact from './contact/page';
  import { Metadata } from "next";

  export const metadata: Metadata = {
                title: 'Santiago',
description: 'My business card',
keywords: 'card',
creator: 'Santiago',

}

  export default function Home() {
    return (
        <Contact />
    );
  }
  