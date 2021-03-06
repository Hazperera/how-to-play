import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { withPrefix } from 'gatsby';
import { useConfig } from 'docz';

const Wrapper = ({ children, doc }) => {
  const config = useConfig();

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />

        <link
          rel="apple-touch-icon"
          href={withPrefix('/apple-touch-icon.png')}
          sizes="180x180"
        />
        <link
          rel="icon"
          type="image/png"
          href={withPrefix('/favicon-194x194.png')}
          sizes="194x194"
        />
        <link
          rel="icon"
          type="image/png"
          href={withPrefix('/android-chrome-192x192.png')}
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href={withPrefix('/favicon-16x16.png')}
          sizes="16x16"
        />
        <link rel="manifest" href={withPrefix('/manifest.json')} />
        <link
          rel="mask-icon"
          href={withPrefix('/safari-pinned-tab.svg')}
          color="#000000"
        />
        <link
          id="favicon"
          rel="shortcut icon"
          href={withPrefix('/favicon.ico')}
        />
        <meta name="apple-mobile-web-app-title" content={config.title} />
        <meta name="application-name" content={config.title} />
        <meta
          name="description"
          content="Official How to Play guide for online werewolf, a web based version of the party game Mafia, aka Werewolf. Contains role descriptions, tips and strategy for playing"
        />
        <meta name="theme-color" content="#000000" />
        <link
          rel="canonical"
          href="https://werewolv.es/guides/how-to-play-online-werewolf"
        />
      </Helmet>
      {children}
    </React.Fragment>
  );
};
export default Wrapper;
