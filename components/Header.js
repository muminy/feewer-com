import { NavBar } from "./Bootstrap";
import SVGLogo from "./SVGLogo";
import Link from "next/link";
import { useRouter } from "next/router";
import { PlusIcon } from "constant/icons";
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
    { key: 0, text: "Read", router: "/" },
    { key: 1, text: "Repository", router: "/repos" },
    { key: 2, text: "Watch", router: "/watch" },
  ];
  return (
    <NavBar>
      <SVGLogo />
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <MenuIcon />
      </button>

      <div
        className="collapse navbar-collapse"
        id="navbarSupportedContent"
      >
        <div className="menu_list"></div>
      </div>
    </NavBar>
  );
}
