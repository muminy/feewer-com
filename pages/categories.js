import Layout from "components/Layout";
import { Container, Row, Col } from "components/Bootstrap";
import { useState } from "react";
import { GoogleIcon } from "constant/icons";
import Sidebar from "components/Sidebar";

export const CategoriList = ({ lists }) => {
  return (
    <div className="flex flexwrap">
      {lists.map((item) => (
        <div className="categori flex">
          <div className="c_content">
            <div className="name">{item.text}</div>
            <div className="follower_c">
              <b>{item.followers}</b> Toplam takipçi
            </div>
            <div className="follower_c">
              <b>{item.reply}</b> Reply
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default function () {
  const [categories, setCategories] = useState({
    fav: [
      {
        key: 1,
        text: "Google",
        followers: 192,
        konu: 81,
        reply: 1027,
      },
      {
        key: 2,
        text: "Instagram",
        followers: 31,
        konu: 83,
        reply: 702,
      },
      {
        key: 3,
        text: "Twitter",
        followers: 51,
        konu: 43,
        reply: 1301,
      },
      {
        key: 3,
        text: "Adsanse",
        followers: 31,
        konu: 13,
        reply: 301,
      },
    ],
    other: [
      {
        key: 1,
        text: "Adsanse",
        followers: 31,
        konu: 13,
        reply: 301,
      },
    ],
  });
  return (
    <Layout>
      <Row>
        <Col className="hide_col" lg={3}>
          <Sidebar />
        </Col>
        <Col lg={9}>
          <div className="most_populars">
            <div className="title_c">
              <header className="big_header">
                Kategoriler
              </header>
              <p className="ci fw_menu_list">
                Kendi tarzınıza uygun kategorileri
                favorilere ekleyebilir ve hızlıca
                ulaşabilirsiniz, ayrıca kategoriler arasında
                kaybolmamanız için hızlıca arama
                yapabilirsiniz.
              </p>
            </div>
            <header className="f_title">
              Favori listen
              <span>{categories.fav.length}</span>
            </header>
            <CategoriList lists={categories.fav} />
            <header className="f_title mt30">
              Diğer kategoriler
              <span>{categories.other.length}</span>
            </header>
            <CategoriList lists={categories.other} />
          </div>
        </Col>
      </Row>
    </Layout>
  );
}
