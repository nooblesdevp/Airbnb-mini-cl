import React from "react";
import { ExpandMoreOutlined, Language, Search } from "@material-ui/icons";

import "./Header.scss";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
        alt=""
      />
      <div className="header__center">
        <input type="text" />
        <Search className="header__icon" />
      </div>
      <div className="header__right">
        <p>Become a host</p>
        <Language className="header__icon" />
        <ExpandMoreOutlined className="header__icon" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
