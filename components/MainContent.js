import { useState } from "react";
import Link from "next/link";

export default function () {
  const [links, setLinks] = useState([
    { key: 1, text: "Son Konular" },
    { key: 2, text: "Son Cevaplananlar" },
    { key: 3, text: "Popüler" },
    { key: 4, text: "İlan Panosu" },
    { key: 5, text: "Son Gezinenler" },
  ]);
  return (
    <div className="main_content">
      <div className="gundem_kedi4">
        <header>Community</header>
        <div className="link_list">
          {links.map((item) => (
            <Link {...item} href="/">
              <a
                className={`links ${
                  item.key === 1 ? "activeLinks" : ""
                }`}
              >
                {item.text}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <div className="thread_list flex aic">
        <img src="https://static.dribbble.com/users/14190/avatars/normal/b268425ca6ef849dc03cf2723a44a16f.png?1414231950" />
        <div className="content_thread">
          <div className="title">
            Lorem Ipsum is simply dummy text of the printing
            and typesetting industry.
          </div>
          <div className="thread_info flex">
            <Link href="/">
              <a className="user_name_surname">
                Eren kovalı
              </a>
            </Link>
            <time>14 Ağustos, 2020</time>
            <div className="replies">14 cevap</div>
          </div>
        </div>
      </div>
      <div className="thread_list flex aic">
        <img src="https://cdn.r10.net/image.php?u=125762" />
        <div className="content_thread">
          <div className="title">
            Ücretsiz Seo Uyumlu Wordpress Teması
          </div>
          <div className="thread_info flex">
            <Link href="/">
              <a className="user_name_surname">
                Eren kovalı
              </a>
            </Link>
            <time>14 Ağustos, 2020</time>
            <div className="replies">14 cevap</div>
          </div>
        </div>
      </div>
      <div className="thread_list flex aic">
        <img src="https://cdn.r10.net/image.php?u=86426" />
        <div className="content_thread">
          <div className="title">
            Tek Stok / 1Gbps Network- 2 x E5 2697v2 CPU -
            120GB Ram
          </div>
          <div className="thread_info flex">
            <Link href="/">
              <a className="user_name_surname">
                Eren kovalı
              </a>
            </Link>
            <time>14 Ağustos, 2020</time>
            <div className="replies">14 cevap</div>
          </div>
        </div>
      </div>
      <div className="thread_list flex aic">
        <img src="https://cdn.r10.net/image.php?u=119010" />
        <div className="content_thread">
          <div className="title">
            Android uygulama yaptırılacak
          </div>
          <div className="thread_info flex">
            <Link href="/">
              <a className="user_name_surname">
                Eren kovalı
              </a>
            </Link>
            <time>14 Ağustos, 2020</time>
            <div className="replies">14 cevap</div>
          </div>
        </div>
      </div>
      <div className="thread_list flex aic">
        <img src="https://cdn.r10.net/image.php?u=117589" />
        <div className="content_thread">
          <div className="title">
            R10 Üyelerine Firsatlar, 80 Lira Yerine 40
            Liraya
          </div>
          <div className="thread_info flex">
            <Link href="/">
              <a className="user_name_surname">
                Eren kovalı
              </a>
            </Link>
            <time>14 Ağustos, 2020</time>
            <div className="replies">14 cevap</div>
          </div>
        </div>
      </div>
      <div className="pagination flex">
        <Link href="/">
          <a className="prev">Previous</a>
        </Link>
        <Link href="/">
          <a className="next">Next</a>
        </Link>
      </div>
    </div>
  );
}
