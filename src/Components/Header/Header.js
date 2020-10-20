import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

import { Avatar } from "@material-ui/core";
import { ExpandMoreOutlined, Language, Search } from "@material-ui/icons";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>

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
