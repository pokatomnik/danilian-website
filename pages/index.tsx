import * as React from 'react';
import Head from 'next/head';
import { PageWrapper, Header, SubHeader, Text, Link } from '../components';

export default function IndexPage() {
  const handleEmailClick = React.useCallback(
    (evt: React.MouseEvent<HTMLAnchorElement>) => {
      evt.preventDefault();
      window.open('mailto:hugefast@gmail.com', '_blank');
    },
    []
  );

  return (
    <PageWrapper>
      <Head>
        <title>Danilian Akhmedzianov Personal page</title>
        <link rel="stylesheet" href="/static.css" />
      </Head>
      <Header>Danilian Akhmedzianov Personal page</Header>
      <Text>
        Frontend developer, Typescript enthusiast and{' '}
        <Link
          href="https://deno.land/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deno
        </Link>
        ❤️ fan
      </Text>
      <SubHeader>Primary skills</SubHeader>
      <Text>Javascript | React | Typescript | Redux</Text>
      <SubHeader>Secondary Skills</SubHeader>
      <Text>
        NodeJS | ExpressJS | Mongoose | RxJS
        <br />
        Deno🚀 | NextJS | CSS Modules | Styled Components | SASS
      </Text>
      <SubHeader>Technologies/frameworks I used to work with</SubHeader>
      <Text>SVG | Canvas | WebGL | Websocket | PhaserJS</Text>
      <SubHeader>Frontend tools I use</SubHeader>
      <Text>NPM | Yarn | Parcel | Webpack</Text>
      <SubHeader>Tests are important, and I know who are these guys</SubHeader>
      <Text>Jest | Mocha</Text>
      <SubHeader>Other</SubHeader>
      <Text>Docker | Nginx | Serverless (Vercel)</Text>
      <SubHeader>Contacts</SubHeader>
      <Text>
        <Link
          href="https://t.me/johndoefoobar"
          rel="noopener noreferrer"
          target="_blank"
        >
          Telegram
        </Link>{' '}
        |{' '}
        <Link href="#" onClick={handleEmailClick}>
          Email
        </Link>{' '}
        |{' '}
        <Link
          href="https://www.linkedin.com/in/danilian-akhmedzianov-14a789112/"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </Link>
      </Text>
      <SubHeader>Programming stuff</SubHeader>
      <Text>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/pokatomnik"
        >
          Github page
        </Link>{' '}
        |{' '}
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://pokatomnik.github.io"
        >
          Pasta app
        </Link>{' '}
        |{' '}
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://mrakopedia.tk"
        >
          Mrakopedia Reader app
        </Link>
        <br />
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/pokatomnik/how-can-i-typescript"
        >
          Typescript examples
        </Link>
      </Text>
    </PageWrapper>
  );
}
