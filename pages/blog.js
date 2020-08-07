import Layout from "components/Layout";
import { Row, Col } from "components/Bootstrap";
import Sidebar from "components/Sidebar";
import { useState } from "react";
import Link from "next/link";

export const Blogs = ({ items }) => {
  return (
    <div className="flex flexwrap">
      {items.map((item) => (
        <div className="blog_cards">
          <img src={item.img} />
          <div className="content_blog_card">
            <div className="title_blog ">{item.title}</div>
            <div className="blog_author ucN">
              {item.user.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const SmallBlogCard = ({ list }) => {
  return (
    <div className="sbc">
      {list.map((item) => (
        <div className="sbc_1x flex">
          <img src={item.user.img} />
          <div className="ml20  bconten_1j">
            <header>{item.title}</header>
            <p>{item.describtions}</p>
            <div className="flex thread_info flexwrap">
              <Link href="/">
                <a className="user_name_surname">
                  {item.user.name}
                </a>
              </Link>
              <time>{item.time}</time>
              <div className="replies">
                {item.comments} Yorum
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function () {
  const [blogs, setBlogs] = useState([
    {
      key: 0,
      title: "React js ile web programlama",
      img:
        "https://static.dribbble.com/users/168517/screenshots/10744102/media/129ff48f6e5b20063e09683b704688c6.png",
      user: {
        name: "Emir Tanrıkulu",
      },
    },
    {
      key: 1,
      title: "Günlük kullandığım uygulamalar ve araçlar",
      img:
        "https://static.dribbble.com/users/426260/screenshots/4313137/helpcenter.png",
      user: {
        name: "Yuşa Biçer",
      },
    },
    {
      key: 2,
      title:
        "Create a Dashboard with Next.js API Routes - Google Analytics API",
      img:
        "https://static.dribbble.com/users/1298136/screenshots/9829562/image.png",
      user: {
        name: "Hakan Fidan",
      },
    },
  ]);
  const [sblogs, setSBlogs] = useState([
    {
      key: 0,
      title: "React js ile web programlama",
      img:
        "https://static.dribbble.com/users/168517/screenshots/10744102/media/129ff48f6e5b20063e09683b704688c6.png",
      describtions:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      user: {
        name: "Emir Tanrıkulu",
        img:
          "https://static.dribbble.com/users/1298136/avatars/normal/54c89716af0251ba6f5dae38ac803afd.png?1563370588",
      },
      time: "18 Ağustos, 2020",
      comments: 18,
    },
    {
      key: 1,
      title: "Günlük kullandığım uygulamalar ve araçlar",
      img:
        "https://static.dribbble.com/users/426260/screenshots/4313137/helpcenter.png",
      describtions: `Lorem Ipsum
          has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a
          type specimen book.`,
      user: {
        name: "Yuşa Biçer",
        img:
          "https://static.dribbble.com/users/2277999/avatars/normal/5373b32f3336cfbe1eb7436749627d77.jpg?1589257874",
      },
      time: "20 Ağustos, 2020",
      comments: 10,
    },
    {
      key: 2,
      title:
        "Create a Dashboard with Next.js API Routes - Google Analytics API",
      describtions: `It was popularised in the 1960s
      with the release of Letraset sheets containing
      Lorem Ipsum passages`,
      img:
        "https://static.dribbble.com/users/1298136/screenshots/9829562/image.png",
      user: {
        name: "Hakan Fidan",
        img:
          "https://static.dribbble.com/users/3606237/avatars/normal/8a177634e583ca78a7a5137c809f0d32.jpg?1578278930",
      },
      time: "21 Ağustos, 2020",
      comments: 3,
    },
  ]);
  return (
    <Layout>
      <Row>
        <Col className="hide_col" lg={3}>
          <Sidebar />
        </Col>
        <Col lg={9}>
          <Blogs items={blogs} />
          <header className="f_title mt30">
            Son yazılar
          </header>
          <SmallBlogCard list={sblogs} />
        </Col>
      </Row>
    </Layout>
  );
}
