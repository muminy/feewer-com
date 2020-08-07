import {
  CatIcon,
  SettingIcon,
  LogOutIcon,
  MessageIcon,
  BellIcon,
  UserAddIcon,
} from "constant/icons";
import SVGLogo from "./SVGLogo";
import Link from "next/link";

export const ProfileActions = () => {
  return (
    <div className="profiles fw">
      <div className="flex aic profile_actions_xx10">
        <div className="is_online">
          <img src="https://cdn.dribbble.com/users/180062/avatars/small/53db1cbb5a26108ac2181dc272f95b63.png?1498213923" />
        </div>
        <div className="user_info">
          <div className="user_name">Erik Direk</div>
          <div className="userName">@erikd</div>
        </div>
      </div>
      <ul className="actionList">
        <li className="list_items flex aic">
          <MessageIcon size={20} color="#585858" />
          <div className="info_dropdown">Mesajlar</div>
        </li>
        <li className="list_items flex aic">
          <BellIcon size={20} color="#585858" />
          <div className="info_dropdown">Bildirimler</div>
        </li>
        <li className="list_items flex aic">
          <UserAddIcon size={20} color="#585858" />
          <div className="info_dropdown">
            Arkadaşlık istekleri
          </div>
        </li>
      </ul>
    </div>
  );
};
export const Title4Sidebar = ({ title, info }) => {
  return (
    <header className="header_title">
      <div className="t">{title}</div>
      {info ?? <div className="i">{info}</div>}
    </header>
  );
};

export const OnlineUsers = () => {
  return (
    <div className="shouldFollow">
      <div className="user_x flex center">
        <div className="is_online">
          <img src="https://cdn.dribbble.com/users/180062/avatars/small/53db1cbb5a26108ac2181dc272f95b63.png?1498213923" />
        </div>
        <div className="user_name_info fonti center">
          <div className="user_ii">
            <div className="un ucN">Fatih kadir akın</div>
            <div className="unic">fkadev</div>
          </div>
        </div>
      </div>
      <div className="user_x flex center">
        <div className="is_online">
          <img src="https://static.dribbble.com/users/42578/avatars/normal/d0ac345ce3f79bf2c2e7e64527bbf342.jpg?1530900788" />
        </div>
        <div className="user_name_info fonti center">
          <div className="user_ii">
            <div className="un ucN">Emirhan Dereli</div>
            <div className="unic">emrihan</div>
          </div>
        </div>
      </div>
      <div className="user_x flex center">
        <div className="is_online">
          <img src="https://cdn.dribbble.com/users/4189231/avatars/normal/beac5382e2629adcd8f3bdfa68994fe5.jpg?1570110577" />
        </div>
        <div className="user_name_info fonti center">
          <div className="user_ii">
            <div className="un ucN">Yusuf Eren</div>
            <div className="unic">yusuf</div>
          </div>
        </div>
      </div>
      <Link href="/">
        <a className="tumunu_gor_link">Tümünü gör</a>
      </Link>
    </div>
  );
};

export default function () {
  return (
    <div className="sidebar">
      <ProfileActions />
      <Title4Sidebar
        title="Aktif arkadaşların"
        info="18 arkadaşınız online"
      />
      <OnlineUsers />
    </div>
  );
}
