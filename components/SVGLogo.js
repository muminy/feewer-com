import { CatIcon } from "constant/icons";
import { siteConfig } from "site.config";

export default function () {
  return (
    <div className="logoText flex aic">
      <CatIcon
        className="logo_icon"
        size={28}
        color="#111"
      />
    </div>
  );
}
