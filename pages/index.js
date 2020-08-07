import Head from "next/head";
import Layout from "components/Layout";
import { Row, Col } from "components/Bootstrap";
import Sidebar from "components/Sidebar";
import MainContent from "components/MainContent";

export default function Home() {
  return (
    <Layout title="Forum">
      <Row classNames={["c", "w"]}>
        <Col className="hide_col" lg={3} sm={12}>
          <Sidebar />
        </Col>
        <Col lg={9} sm={12}>
          <MainContent />
        </Col>
      </Row>
    </Layout>
  );
}
