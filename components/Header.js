import { NavBar } from "./Bootstrap";
import SVGLogo from "./SVGLogo";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  PlusIcon,
  BottomArrow,
  ProfileIcon,
  SettingIcon,
  LogOutIcon,
  MessageIcon,
  BellIcon,
  UserAddIcon,
} from "constant/icons";
import { useState, useEffect } from "react";
import posed from "react-pose";

const AnimateUl = posed.ul({
  close: { display: "none" },
  open: { display: "block" },
});

export const MenuIcon = () => (
  <div className="menu_icon_list">
    <div className="line"></div>
    <div className="line"></div>
    <div className="line"></div>
  </div>
);

export default function () {
  const router = useRouter();
  const links = [
    { key: 0, text: "Forum", router: "/" },
    { key: 1, text: "Kategoriler", router: "/categories" },
    { key: 2, text: "Blog", router: "/blog" },
  ];
  const [dropDown, setDropDown] = useState(false);
  return (
    <NavBar>
      <div className="flex fw_menu_list">
        <SVGLogo />
        <div className="searc_area_x10">
          <input placeholder="Ara..." />
        </div>
      </div>
      <div className="menu_list">
        {links.map((item) => {
          let className = ["menu_link"];
          router.pathname === item.router
            ? className.push("active")
            : null;
          return (
            <Link href={`${item.router}`} key={item.key}>
              <a className={className.join(" ")}>
                {item.text}
              </a>
            </Link>
          );
        })}
      </div>
      <div className="responsive_menu">
        <Link href="/">
          <a className="m_l">
            <MessageIcon size={30} color="#3a3a3a" />
            <span>Mesajlar</span>
          </a>
        </Link>
        <Link href="/">
          <a className="m_l">
            <BellIcon size={30} color="#3a3a3a" />
            <span>Bildirimler</span>
          </a>
        </Link>
        <Link href="/">
          <a className="m_l">
            <UserAddIcon size={30} color="#3a3a3a" />
            <span>İstekler</span>
          </a>
        </Link>
      </div>
    </NavBar>
  );
}
