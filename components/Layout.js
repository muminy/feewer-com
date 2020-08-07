import Head from "next/head";
import { Container, MainContent } from "./Bootstrap";
import Header from "./Header";
import { siteConfig } from "site.config";
import Sidebar from "./Sidebar";

export default function ({
  title,
  children,
  disableContainer,
}) {
  return (
    <React.Fragment>
      <Head>
        <title>
          {title} {title ? " |" : null} {siteConfig.url}
        </title>
      </Head>
      <Header />
      {disableContainer ? (
        children
      ) : (
        <Container className="main_area">
          {children}
        </Container>
      )}
    </React.Fragment>
  );
}
