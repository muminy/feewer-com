import Head from "next/head";
import { Container, MainContent } from "./Bootstrap";
import Header from "./Header";
import { siteConfig } from "constant/config";
import Sidebar from "./Sidebar";

export default function ({ title, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>
          {title} {title ? " |" : null} {siteConfig.url}
        </title>
      </Head>
      <Header />
      <Container>{children}</Container>
    </React.Fragment>
  );
}
